(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150),c=a(148);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that does not exist."))}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"OliverFlecke"}}}}},147:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},148:function(e,t,a){"use strict";var n=a(149),r=a(4),i=a.n(r),c=a(0),o=a.n(c),l=a(155),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,l=n.data.site,u=t||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:["Oliver Fleckenstein","OliverFlecke"],description:"Personal website for Oliver Fleckenstein"},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u},149:function(e){e.exports={data:{site:{siteMetadata:{title:"OliverFlecke",description:"Personal site for Oliver Fleckenstein",author:"Oliver Fleckenstein"}}}}},150:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),c=a(4),o=a.n(c),l=a(33),s=a.n(l),u=(a(145),i.a.createContext({})),m=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};var d=a(151),p=a.n(d),h=function(e){return i.a.createElement("header",{className:p.a.container},i.a.createElement("div",{className:p.a.header},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",className:p.a.home},e.siteTitle)),i.a.createElement("div",{className:p.a.menu},i.a.createElement("h2",{style:{margin:0}},i.a.createElement(s.a,{to:"/about",className:p.a.menuItem},"About")))))};h.propTypes={siteTitle:o.a.string},h.defaultProps={siteTitle:""};var f=h,v=(a(152),a(153)),g=a.n(v);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var E=i.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}),k=function(e){return i.a.createElement("svg",y({width:24,height:24,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},e),E)};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var w=i.a.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"}),b=i.a.createElement("circle",{cx:4,cy:4,r:2}),j=function(e){return i.a.createElement("svg",O({width:24,height:24,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},e),w,b)};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var N=i.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),T=i.a.createElement("path",{d:"M22 6l-10 7L2 6"}),M=function(e){return i.a.createElement("svg",F({width:24,height:24,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},e),N,T)},q=Object(r.memo)(function(e){return i.a.createElement("div",{className:g.a.container,style:e.style},i.a.createElement("a",{href:"https://github.com/OliverFlecke"},i.a.createElement(k,{className:g.a.icon})),i.a.createElement("a",{href:"https://linkedin.com/in/OliverFlecke/"},i.a.createElement(j,{className:g.a.icon})),i.a.createElement("a",{href:"mailto:OliverFlecke@outlook.com"},i.a.createElement(M,{className:g.a.icon})))}),x=a(154),L=a.n(x),P=function(){return i.a.createElement("div",{className:L.a.container},i.a.createElement(q,{style:{marginTop:12}}))},R=function(e){return i.a.createElement(m,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,width:"100%",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e.children),i.a.createElement(P,null)))},data:n})};R.propTypes={children:o.a.node.isRequired};t.a=R}}]);
//# sourceMappingURL=component---src-pages-404-tsx-ab3bde3b9565bf2052cc.js.map