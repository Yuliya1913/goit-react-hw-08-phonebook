"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[348],{1348:function(t,n,e){e.r(n),e.d(n,{default:function(){return Jt}});var r=e(9439),a=e(2791),o="ContactForm_form_contacts__e25ZD",i="ContactForm_label_contacts__lzipz",s="ContactForm_input_contacts__9sBTW",c="ContactForm_btn_contacts__F11WQ",u=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",e=crypto.getRandomValues(new Uint8Array(t));t--;){var r=63&e[t];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n},l=e(9434),d=function(t){return t.contacts.items},f=function(t){return t.contacts.isLoading},p=function(t){return t.contacts.error},m=function(t){return t.contacts.filter},v=e(3064);function h(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}var g=e(3433),b=e(1413),y=e(4942),x={data:""},_=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||x},Z=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,w=/\/\*[^]*?\*\/|  +/g,j=/\n+/g,C=function t(n,e){var r="",a="",o="",i=function(i){var c=n[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":a+="f"==i[1]?t(c,i):i+"{"+t(c,"k"==i[1]?"":e)+"}":"object"==typeof c?a+=t(c,e?e.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=t.p?t.p(i,c):i+":"+c+";"),s=i};for(var s in n)i(s);return r+(e&&o?e+"{"+o+"}":o)+a},N={},k=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},E=function(t,n,e,r,a){var o=k(t),i=N[o]||(N[o]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(o));if(!N[i]){var s=o!==t?t:function(t){for(var n,e,r=[{}];n=Z.exec(t.replace(w,""));)n[4]?r.shift():n[3]?(e=n[3].replace(j," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(j," ").trim();return r[0]}(t);N[i]=C(a?(0,y.Z)({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&N.g?N.g:null;return e&&(N.g=N[i]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(N[i],n,r,c),i},F=function(t,n,e){return t.reduce((function(t,r,a){var o=n[a];if(o&&o.call){var i=o(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;o=s?"."+s:i&&"object"==typeof i?i.props?"":C(i,""):!1===i?"":i}return t+r+(null==o?"":o)}),"")};function z(t){var n=this||{},e=t.call?t(n.p):t;return E(e.unshift?e.raw?F(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,_(n.target),n.g,n.o,n.k)}z.bind({g:1});var I,A,O,D,L,P,T,S,M,R,q,H,U,B,W,Y,K,$,G,J=z.bind({k:1});function Q(t,n){var e=this||{};return function(){var r=arguments;function a(o,i){var s=Object.assign({},o),c=s.className||a.className;e.p=Object.assign({theme:A&&A()},s),e.o=/ *go\d+/.test(c),s.className=z.apply(e,r)+(c?" "+c:""),n&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),O&&u[0]&&O(s),I(u,s)}return n?n(a):a}}var V=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},X=function(){var t=0;return function(){return(++t).toString()}}(),tt=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),nt=new Map,et=function(t){if(!nt.has(t)){var n=setTimeout((function(){nt.delete(t),it({type:4,toastId:t})}),1e3);nt.set(t,n)}},rt=function t(n,e){switch(e.type){case 0:return(0,b.Z)((0,b.Z)({},n),{},{toasts:[e.toast].concat((0,g.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=nt.get(t);n&&clearTimeout(n)}(e.toast.id),(0,b.Z)((0,b.Z)({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?(0,b.Z)((0,b.Z)({},t),e.toast):t}))});case 2:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:1,toast:r}):t(n,{type:0,toast:r});case 3:var a=e.toastId;return a?et(a):n.toasts.forEach((function(t){et(t.id)})),(0,b.Z)((0,b.Z)({},n),{},{toasts:n.toasts.map((function(t){return t.id===a||void 0===a?(0,b.Z)((0,b.Z)({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?(0,b.Z)((0,b.Z)({},n),{},{toasts:[]}):(0,b.Z)((0,b.Z)({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return(0,b.Z)((0,b.Z)({},n),{},{pausedAt:e.time});case 6:var o=e.time-(n.pausedAt||0);return(0,b.Z)((0,b.Z)({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return(0,b.Z)((0,b.Z)({},t),{},{pauseDuration:t.pauseDuration+o})}))})}},at=[],ot={toasts:[],pausedAt:void 0},it=function(t){ot=rt(ot,t),at.forEach((function(t){t(ot)}))},st={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ct=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,b.Z)((0,b.Z)({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||X()})}(n,t,e);return it({type:2,toast:r}),r.id}},ut=function(t,n){return ct("blank")(t,n)};ut.error=ct("error"),ut.success=ct("success"),ut.loading=ct("loading"),ut.custom=ct("custom"),ut.dismiss=function(t){it({type:3,toastId:t})},ut.remove=function(t){return it({type:4,toastId:t})},ut.promise=function(t,n,e){var r=ut.loading(n.loading,(0,b.Z)((0,b.Z)({},e),null==e?void 0:e.loading));return t.then((function(t){return ut.success(V(n.success,t),(0,b.Z)((0,b.Z)({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){ut.error(V(n.error,t),(0,b.Z)((0,b.Z)({id:r},e),null==e?void 0:e.error))})),t};var lt=function(t,n){it({type:1,toast:{id:t,height:n}})},dt=function(){it({type:5,time:Date.now()})},ft=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,a.useState)(ot),e=(0,r.Z)(n,2),o=e[0],i=e[1];(0,a.useEffect)((function(){return at.push(i),function(){var t=at.indexOf(i);t>-1&&at.splice(t,1)}}),[o]);var s=o.toasts.map((function(n){var e,r;return(0,b.Z)((0,b.Z)((0,b.Z)((0,b.Z)({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||st[n.type],style:(0,b.Z)((0,b.Z)((0,b.Z)({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return(0,b.Z)((0,b.Z)({},o),{},{toasts:s})}(t),e=n.toasts,o=n.pausedAt;(0,a.useEffect)((function(){if(!o){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return ut.dismiss(n.id)}),e);n.visible&&ut.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,o]);var i=(0,a.useCallback)((function(){o&&it({type:6,time:Date.now()})}),[o]),s=(0,a.useCallback)((function(t,n){var r,a=n||{},o=a.reverseOrder,i=void 0!==o&&o,s=a.gutter,c=void 0===s?8:s,u=a.defaultPosition,l=e.filter((function(n){return(n.position||u)===(t.position||u)&&n.height})),d=l.findIndex((function(n){return n.id===t.id})),f=l.filter((function(t,n){return n<d&&t.visible})).length;return(r=l.filter((function(t){return t.visible}))).slice.apply(r,(0,g.Z)(i?[f+1]:[0,f])).reduce((function(t,n){return t+(n.height||0)+c}),0)}),[e]);return{toasts:e,handlers:{updateHeight:lt,startPause:dt,endPause:i,calculateOffset:s}}},pt=J(D||(D=h(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),mt=J(L||(L=h(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),vt=J(P||(P=h(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),ht=Q("div")(T||(T=h(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),pt,mt,(function(t){return t.secondary||"#fff"}),vt),gt=J(S||(S=h(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),bt=Q("div")(M||(M=h(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),gt),yt=J(R||(R=h(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),xt=J(q||(q=h(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),_t=Q("div")(H||(H=h(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),yt,xt,(function(t){return t.secondary||"#fff"})),Zt=Q("div")(U||(U=h(["\n  position: absolute;\n"]))),wt=Q("div")(B||(B=h(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),jt=J(W||(W=h(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Ct=Q("div")(Y||(Y=h(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),jt),Nt=function(t){var n=t.toast,e=n.icon,r=n.type,o=n.iconTheme;return void 0!==e?"string"==typeof e?a.createElement(Ct,null,e):e:"blank"===r?null:a.createElement(wt,null,a.createElement(bt,(0,b.Z)({},o)),"loading"!==r&&a.createElement(Zt,null,"error"===r?a.createElement(ht,(0,b.Z)({},o)):a.createElement(_t,(0,b.Z)({},o))))},kt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},Et=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},Ft=Q("div")(K||(K=h(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),zt=Q("div")($||($=h(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),It=a.memo((function(t){var n=t.toast,e=t.position,o=t.style,i=t.children,s=n.height?function(t,n){var e=t.includes("top")?1:-1,a=tt()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[kt(e),Et(e)],o=(0,r.Z)(a,2),i=o[0],s=o[1];return{animation:n?"".concat(J(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(J(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},c=a.createElement(Nt,{toast:n}),u=a.createElement(zt,(0,b.Z)({},n.ariaProps),V(n.message,n));return a.createElement(Ft,{className:n.className,style:(0,b.Z)((0,b.Z)((0,b.Z)({},s),o),n.style)},"function"==typeof i?i({icon:c,message:u}):a.createElement(a.Fragment,null,c,u))}));!function(t,n,e,r){C.p=n,I=t,A=e,O=r}(a.createElement);var At=function(t){var n=t.id,e=t.className,r=t.style,o=t.onHeightUpdate,i=t.children,s=a.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;o(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,o]);return a.createElement("div",{ref:s,className:e,style:r},i)},Ot=z(G||(G=h(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Dt=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,o=t.toastOptions,i=t.gutter,s=t.children,c=t.containerStyle,u=t.containerClassName,l=ft(o),d=l.toasts,f=l.handlers;return a.createElement("div",{style:(0,b.Z)({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},c),className:u,onMouseEnter:f.startPause,onMouseLeave:f.endPause},d.map((function(t){var e=t.position||r,o=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return(0,b.Z)((0,b.Z)({left:0,right:0,display:"flex",position:"absolute",transition:tt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),a)}(e,f.calculateOffset(t,{reverseOrder:n,gutter:i,defaultPosition:r}));return a.createElement(At,{id:t.id,key:t.id,onHeightUpdate:f.updateHeight,className:t.visible?Ot:"",style:o},"custom"===t.type?V(t.message,t):s?s(t):a.createElement(It,{toast:t,position:e}))})))},Lt=ut,Pt=e(184),Tt=function(){var t=(0,a.useState)(""),n=(0,r.Z)(t,2),e=n[0],f=n[1],p=(0,a.useState)(""),m=(0,r.Z)(p,2),h=m[0],g=m[1],b=(0,l.v9)(d),y=(0,l.I0)(),x=u(),_=u(),Z=function(t){var n=t.currentTarget,e=n.name,r=n.value;"name"===e&&f(r),"number"===e&&g(r)},w=function(){f(""),g("")};return(0,Pt.jsxs)("form",{className:o,onSubmit:function(t){if(t.preventDefault(),b.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return Lt((function(t){return(0,Pt.jsxs)("span",{style:{color:"#1a01d4"},children:[e," is already in contacts.",(0,Pt.jsx)("button",{style:{marginLeft:"15px",border:"1px solid rgb(205, 167, 244)",borderRadius:"50px",background:"rgb(173, 236, 236)",color:"#1a01d4",padding:"7px"},onClick:function(){return Lt.dismiss(t.id)},children:"Close"})]})}),{duration:"1000",icon:"\ud83d\ude15",position:"top-right",style:{border:"5px solid #e5ccfd",borderRadius:"50px",background:"#ebffeb",color:"#4f0381"}}),void w();Lt("new contact ".concat(e," added"),{position:"top-right",duration:"300",icon:"\ud83d\udc4f",style:{border:"5px solid #e5ccfd",borderRadius:"50px",background:"#ebffeb",color:"#1a01d4"}}),y((0,v.uK)({name:e,number:h,id:u()})),w()},children:[(0,Pt.jsx)(Dt,{}),(0,Pt.jsxs)("label",{className:i,htmlFor:x,children:["Name",(0,Pt.jsx)("input",{className:s,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,required:!0,onChange:Z,id:x})]}),(0,Pt.jsxs)("label",{className:i,htmlFor:_,children:["Number",(0,Pt.jsx)("input",{className:s,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:h,onChange:Z,id:_})]}),(0,Pt.jsx)("button",{type:"submit",className:c,children:"Add contact"})]})},St="ContactItem_button_contact__IsPs9",Mt="ContactItem_item_contact__McLDe",Rt="ContactItem_wrapper_contact__fbYIf",qt=function(t){var n=t.contact,e=(0,l.I0)(),r=n.id,a=n.name,o=n.number;return(0,Pt.jsxs)("div",{className:Rt,children:[(0,Pt.jsxs)("li",{className:Mt,children:[a,": ",o]}),(0,Pt.jsx)("button",{className:St,onClick:function(){e((0,v.GK)(r))},children:"Delete"})]})},Ht=function(){var t=(0,l.v9)(d),n=(0,l.v9)(m),e=t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return(0,Pt.jsx)("ul",{children:e.map((function(t){return(0,Pt.jsx)(qt,{contact:t},t.id)}))})},Ut="Filter_label_filter__-5ECC",Bt="Filter_title_filter__le8w2",Wt="Filter_filter__vxThR",Yt=e(1538),Kt=function(){var t=(0,l.v9)(m),n=(0,l.I0)();return(0,Pt.jsxs)("label",{htmlFor:"filterId",className:Ut,children:[(0,Pt.jsx)("p",{className:Bt,children:"Find contacts by name"}),(0,Pt.jsx)("input",{className:Wt,type:"text",value:t,onChange:function(t){n((0,Yt.W)(t.currentTarget.value))}})]})},$t=e(4270),Gt={pages:"Contacts_pages__UCsbF",title_contact:"Contacts_title_contact__YdbFL",pages_title:"Contacts_pages_title__dfo0R"},Jt=function(){var t=(0,l.v9)(d),n=(0,l.v9)(f),e=(0,l.v9)(p),r=(0,l.I0)();(0,a.useEffect)((function(){r((0,v.yF)())}),[r]);var o=t.length>0;return(0,Pt.jsxs)("div",{className:Gt.pages_contact,style:{textAlign:"center"},children:[(0,Pt.jsx)($t.q,{children:(0,Pt.jsx)("h1",{className:Gt.title_contact,children:"Phonebook"})}),(0,Pt.jsx)(Tt,{}),(0,Pt.jsxs)("div",{className:Gt.pages_wrapper,children:[(0,Pt.jsx)("h2",{className:Gt.pages_title,children:"Contacts"}),o&&(0,Pt.jsx)(Kt,{})]}),o&&(0,Pt.jsx)(Ht,{}),n&&!e&&(0,Pt.jsx)("b",{children:"Request in progress..."})]})}}}]);
//# sourceMappingURL=348.f3510c38.chunk.js.map