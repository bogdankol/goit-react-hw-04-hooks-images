(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={item:"ImageGalleryItem_item__Olyg2",img:"ImageGalleryItem_img__1kqGJ"}},12:function(e,t,a){e.exports={overlay:"Modal_overlay__3kmTr",modal:"Modal_modal__ASOfC"}},14:function(e,t,a){e.exports={container:"Loader_container__2mnrH"}},16:function(e,t,a){e.exports={btn:"Button_btn__2Dyed"}},21:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),i=(a(21),a(3)),s=a(4),l=a(6),u=a(5),h=a(7),d=a.n(h);a.p;var p=a(0),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.inputHandler=function(t){e.setState({value:t.currentTarget.value})},e.submitHandler=function(t){t.preventDefault(),e.props.giveDataToApp(e.state.value),e.setState({value:""})},e}return Object(s.a)(a,[{key:"render",value:function(){this.state.value;var e=this.inputHandler,t=this.submitHandler;return Object(p.jsx)("header",{className:d.a.Searchbar,children:Object(p.jsxs)("form",{className:d.a.SearchForm,onSubmit:t,children:[Object(p.jsx)("button",{type:"submit",className:d.a.button,children:Object(p.jsx)("span",{className:"s.label",children:"Search"})}),Object(p.jsx)("input",{className:d.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:e})]})})}}]),a}(n.Component),j=a(13),m=a(9),f=a.n(m),g=a(11),v=a.n(g),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onClickHandler=function(t){e.props.onClick(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.array,t=this.onClickHandler;this.onCloseModal;return e.map((function(e){return Object(p.jsx)("li",{className:v.a.item,onClick:t,children:Object(p.jsx)("img",{src:e.webformatURL,alt:e.tags,className:v.a.img,"data-largeurl":e.largeImageURL})},e.id)}))}}]),a}(n.Component),O=a(14),_=a.n(O),k=(a(23),a(15)),x=a.n(k),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:_.a.container,children:Object(p.jsx)(x.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:99e3})})}}]),a}(n.Component),w=a(12),S=a.n(w),F=document.querySelector("#modal-root"),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onCloseModalWindow(t)},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onCloseModalWindow(t)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:S.a.overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:S.a.modal,children:Object(p.jsx)("img",{src:this.props.src,alt:"bigImage"})})}),F)}}]),a}(n.Component),N=a(16),L=a.n(N),H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).buttonClickHandler=function(t){e.props.onButtonClick()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.buttonClickHandler;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{type:"button",onClick:e,className:L.a.btn,children:"Load more"})})}}]),a}(n.Component),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={modal:!1,url:"",imagesArray:[],page:1,error:null,status:"idle",isLoading:!1},e.onClickHandler=function(){e.setState((function(e){return{page:e.page+1}})),setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1e3)},e.onClick=function(t){e.setState({url:t.target.dataset.largeurl,modal:!0})},e.closeModal=function(t){e.setState({modal:!1})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state.page,n=this.props.query;e.query!==this.props.query&&(this.setState({page:1,imagesArray:[]}),this.fetch(n,a)),t.page!==this.state.page&&this.fetch(n,this.state.page)}},{key:"fetch",value:function(e){function t(t,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){var a=this;this.setState({isLoading:!0});var n="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=22223449-0f7605970ab6351a0732adfe1&image_type=photo&orientation=horizontal&per_page=12");return fetch(n).then((function(e){return e.ok?e.json():Promise.reject(new Error("there are some problems with server or your input is bizarre."))})).then((function(e){return e.hits.length>0?a.setState((function(t){return{imagesArray:[].concat(Object(j.a)(t.imagesArray),Object(j.a)(e.hits)),status:"resolved",isLoading:!1}})):(a.setState({status:"idle",isLoading:!1}),alert("there are no results!"))})).catch((function(e){return a.setState({status:"rejected",error:e})}))}))},{key:"render",value:function(){var e=this.state,t=e.modal,a=e.url,n=e.imagesArray,r=e.error,o=e.status,c=e.isLoading,i=this.onClick,s=this.closeModal,l=this.onClickHandler;return Object(p.jsxs)("div",{children:["rejected"===o&&Object(p.jsx)("div",{className:f.a.div,children:Object(p.jsx)("h2",{children:r.message})}),"resolved"===o&&Object(p.jsxs)("div",{className:f.a.div,children:[Object(p.jsx)("ul",{className:f.a.list,children:Object(p.jsx)(y,{array:n,onClick:i,onClose:s})}),c&&Object(p.jsx)(C,{}),n.length>=12&&Object(p.jsx)(H,{onButtonClick:l})]}),t&&Object(p.jsx)(A,{src:a,onCloseModalWindow:s})]})}}]),a}(n.Component),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.getQueryFromInput=function(t){e.setState({query:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.getQueryFromInput,t=this.state.query;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b,{giveDataToApp:e}),Object(p.jsx)(I,{query:t})]})}}]),a}(n.Component),D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),D()},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2OtuN",SearchForm:"Searchbar_SearchForm__1w-vU",button:"Searchbar_button__2F1t7",label:"Searchbar_label__2oOuc",input:"Searchbar_input__2TvcV"}},9:function(e,t,a){e.exports={div:"ImageGallery_div__2gGw-",list:"ImageGallery_list__8RXis"}}},[[44,1,2]]]);
//# sourceMappingURL=main.e75b2c66.chunk.js.map