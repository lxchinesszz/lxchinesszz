import{R as p}from"./chunks/theme.DEd1zV9x.js";import{j as o,ac as u,ad as l,ae as c,af as f,ag as d,ah as m,ai as h,aj as g,ak as A,al as P,d as v,u as w,l as y,x as C,am as R,an as b,ao as E,a4 as S}from"./chunks/framework.CC62xl_U.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(p),T=v({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=w();return y(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&R(),b(),E(),s.setup&&s.setup(),()=>S(s.Layout)}});async function j(){globalThis.__VITEPRESS__=!0;const e=D(),a=x();a.provide(l,e);const t=c(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function x(){return g(T)}function D(){let e=o,a;return A(t=>{let n=P(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{j as createApp};
