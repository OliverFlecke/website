(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(146),r=a(0),i=a.n(r),c=a(152),l=a(150);t.default=function(){return i.a.createElement(c.a,null,i.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("h1",null,"Hi!"),i.a.createElement(n.a,{to:"/about/"},"About"))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(147);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"OliverFlecke"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(56),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,a){"use strict";var n=a(151),r=a(4),i=a.n(r),c=a(0),l=a.n(c),o=a(156),s=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,o=n.data.site,u=t||o.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u},151:function(e){e.exports={data:{site:{siteMetadata:{title:"OliverFlecke",description:"Personal site for Oliver Fleckenstein",author:"Oliver Fleckenstein"}}}}},152:function(e,t,a){"use strict";var n=a(148),r=a(146),i=a(4),c=a.n(i),l=a(0),o=a.n(l),s=function(e){return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(r.a,{to:"/",style:{color:"white",textDecoration:"none"}},e.siteTitle))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var u=s,m=(a(154),a(153)),d=a(155),p=a.n(d),f=Object(l.memo)(function(){return o.a.createElement("div",{className:p.a.container},o.a.createElement("a",{href:"https://github.com/OliverFlecke"},o.a.createElement(m.a,{src:"../../icons/github.svg",svgClassName:p.a.icon,fallback:function(){return o.a.createElement("span",null,"GitHub")}})),o.a.createElement("a",{href:"https://linkedin.com/in/OliverFlecke/"},o.a.createElement(m.a,{src:"../../icons/linkedin.svg",svgClassName:p.a.icon,fallback:function(){return o.a.createElement("span",null,"LinkedIn")}})),o.a.createElement("a",{href:"mailto:OliverFlecke@outlook.com"},o.a.createElement(m.a,{src:"../../icons/mail.svg",svgClassName:p.a.icon,fallback:function(){return o.a.createElement("span",null,"Email")}})))}),g=function(e){return o.a.createElement(r.b,{query:"755544856",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{siteTitle:t.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,e.children),o.a.createElement("footer",null,o.a.createElement(f,null),"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})};g.propTypes={children:c.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3d3915b18a23006927a1.js.map