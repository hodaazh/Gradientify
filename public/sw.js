if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-3b8f217841db31f9.js",revision:"3b8f217841db31f9"},{url:"/_next/static/chunks/pages/_app-1cded44cfc772c8b.js",revision:"1cded44cfc772c8b"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/gradient-generator-8611234912b5543a.js",revision:"8611234912b5543a"},{url:"/_next/static/chunks/pages/gradient/%5Bindex%5D-b32117c3e6f3f345.js",revision:"b32117c3e6f3f345"},{url:"/_next/static/chunks/pages/index-b2bb2383eec2e721.js",revision:"b2bb2383eec2e721"},{url:"/_next/static/chunks/pages/new-gradients-9c34e1d9900fbc31.js",revision:"9c34e1d9900fbc31"},{url:"/_next/static/chunks/pages/saved-gradients-b24497eaba5bc739.js",revision:"b24497eaba5bc739"},{url:"/_next/static/chunks/pages/specific-gradient-1ac7a0dae5bafe2e.js",revision:"1ac7a0dae5bafe2e"},{url:"/_next/static/chunks/pages/specific-gradient/%5Bid%5D-ced0327173b2a06c.js",revision:"ced0327173b2a06c"},{url:"/_next/static/chunks/pages/tints-shades-8dab717e53adaa1c.js",revision:"8dab717e53adaa1c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"5752944655d749a0"},{url:"/_next/static/css/54b9c5113c2410b4.css",revision:"54b9c5113c2410b4"},{url:"/_next/static/css/670386e6baa462c8.css",revision:"670386e6baa462c8"},{url:"/_next/static/css/768624acf68f7837.css",revision:"768624acf68f7837"},{url:"/_next/static/css/841611745fb367a7.css",revision:"841611745fb367a7"},{url:"/_next/static/css/a691b4dd39033eda.css",revision:"a691b4dd39033eda"},{url:"/_next/static/css/a97307db46f9c966.css",revision:"a97307db46f9c966"},{url:"/_next/static/css/aa9e9322bc96cd9d.css",revision:"aa9e9322bc96cd9d"},{url:"/_next/static/css/b16d5a41fd20e9c1.css",revision:"b16d5a41fd20e9c1"},{url:"/_next/static/jt3tJLvVWPo7NJn4DChVn/_buildManifest.js",revision:"27ff5d3965d293991620a19018464d56"},{url:"/_next/static/jt3tJLvVWPo7NJn4DChVn/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/icomoon.0657b8c3.eot",revision:"0657b8c3"},{url:"/_next/static/media/icomoon.1aa74077.svg",revision:"1aa74077"},{url:"/_next/static/media/icomoon.dd73271f.ttf",revision:"dd73271f"},{url:"/_next/static/media/icomoon.ea4bbc00.woff",revision:"ea4bbc00"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icomoon/demo-files/demo.css",revision:"689ebc125ab157d640b204a6784d6a51"},{url:"/icomoon/demo-files/demo.js",revision:"13436f080b2f0d7354d7d6005e64d6a8"},{url:"/icomoon/demo.html",revision:"e017b446ed9a15c14f9c90522bc4e81c"},{url:"/icomoon/fonts/icomoon.eot",revision:"f4ea94f02f47604f795c2dc4b634b063"},{url:"/icomoon/fonts/icomoon.svg",revision:"c70042203c03fb26c8b0f1ad6d2734c6"},{url:"/icomoon/fonts/icomoon.ttf",revision:"82689b382866814dda8f7a20e8582078"},{url:"/icomoon/fonts/icomoon.woff",revision:"5c245a3da0925bdc955c49ef70a76528"},{url:"/icomoon/style.css",revision:"18eeef08121b7dbd4ff03f679f38b5b0"},{url:"/images/banner.png",revision:"b9d2ebd935c1e73bc8059dab33fad368"},{url:"/manifest.json",revision:"8d4855e1ab8da2117ca9747ba6bd879c"},{url:"/svg/1.svg",revision:"62e167ee8f64fdabe7660372613d95d7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
