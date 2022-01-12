import{j as f,r as m,u as k,L as w,c as N,a as P,F as L,f as j,B as A,S as I,R as x,Q as $,b as C,d as S,e as D,g as R}from"./vendor.9a41d45e.js";const F=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};F();const e=f.exports.jsx,o=f.exports.jsxs,u=f.exports.Fragment,B=({history:i})=>(m.exports.useEffect(()=>{setTimeout(()=>{i.push("/pokemons")},2400)},[]),e(u,{children:e("div",{className:"flex items-center justify-center min-h-screen",children:e("h1",{className:"font-black text-3xl break-words text-white filter ",style:{filter:"drop-shadow(0px 0px 10px #ffffff80) invert(0%)"},children:"Do you like Pokemon?"})})})),E="https://pokeapi.co/api/v2/pokemon",O=()=>{const[i,l]=m.exports.useState([]),s=1118,a=20,t=0,[n,r]=m.exports.useState(20),{isLoading:d,error:h,data:y}=k(`pokeData?offset=${t}&limit=${n}`,()=>fetch(`${E}?offset=${t}&limit=${n}`).then(c=>c.json()));if(h)return"An error has occurred: "+h.message;!d&&i.length<n&&l([...i,...y.results]);const v=c=>{let p=c.split("/");return parseInt(p[p.length-2])},b=()=>{r(n+a>=s?s:n+a)};return o(u,{children:[e("ul",{className:"container mx-auto flex flex-wrap gap-[12px] max-w-md px-[12px]",children:i.map((c,p)=>{let g=v(c.url);return e("li",{className:"inline-flex flex-col items-center bg-white rounded bg-opacity-30",style:{minWidth:"calc(50% - 6px)"},children:o(w,{to:`/pokemon/detail?id=${g}`,children:[e("div",{children:e("img",{src:`https://cdn.jsdelivr.net/gh/PokeAPI/sprites/sprites/pokemon/${g}.png`,alt:c.name})}),e("div",{className:"font-bold text-center",children:c.name})]})},p)})}),e("button",{className:N("btn","btn-block","btn-primary","sticky","bottom-0","transition","duration-300","rounded-none",{loading:d}),onClick:b,children:"more"})]})},Q=()=>e(u,{children:o("div",{className:"relative",children:[e("div",{className:"fixed top-0 left-0 right-0 text-center h-[48px] w-full filter bg-white opacity-20"}),e("h1",{className:"sticky top-0 text-white font-bold text-lg mb-4 text-center ",style:{lineHeight:"48px"},children:"Pokemon"}),e(O,{})]})});function M(){return new URLSearchParams(P().search)}const q=({history:i})=>{const l=M(),s=parseInt(l.get("id"));console.log(s),m.exports.useState([]);const a="https://pokeapi.co/api/v2/pokemon",{isLoading:t,error:n,data:r}=k(`pokemon?${s}`,()=>fetch(`${a}/${s}`).then(d=>d.json()));return r?n?"error"+error.message:t?(console.log("loading"),"loding..."):(console.log(r),o(u,{children:[o("div",{className:"sticky top-0 text-white mb-4 text-center bg-purple-500 h-[36px]",style:{lineHeight:"36px"},children:[o("h1",{children:[s,"\uBC88\uC9F8 \uD3EC\uCF13\uBAAC"]}),o("div",{className:"fixed top-0 left-0 w-[36px] h-[36px] text-white flex items-center justify-center cursor-pointer",onClick:()=>i.goBack(),children:[e(L,{icon:j})," "]})]}),o("div",{className:"flex flex-1 flex-col gap-3 items-center px-[12px]",children:[e("div",{className:"flex justify-center gap-1 max-w-md",children:e("div",{children:e("img",{src:`https://cdn.jsdelivr.net/gh/PokeAPI/sprites/sprites/pokemon/${s}.png`,alt:"{pokeData.name}"})})}),o("div",{className:"flex flex-col gap-2 items-center bg-indigo-200 py-4 px-6 rounded-box text-sm max-w-md w-full",children:[o("div",{className:"w-full",children:["name : ",r.name," "]}),o("div",{className:"w-full",children:["height : ",r.height]}),o("div",{className:"w-full",children:["weight : ",r.weight]}),o("div",{className:"w-full",children:["skills :"," ",r.abilities.map((d,h)=>o("div",{className:"text-gray-800",children:["- ",d.ability.name]}))]})]})]})]})):"None Data"},H=()=>e("div",{className:"App",children:e("div",{className:"min-h-screen bg-gradient-to-b from-purple-400 to-blue-400 ",children:e(A,{children:o(I,{children:[e(x,{path:"/pokemon/detail",component:q}),e(x,{path:"/pokemons",component:Q}),e(x,{path:"/",component:B})]})})})}),T=new $;C.render(e(S.StrictMode,{children:e(D,{children:e(R,{client:T,children:e(H,{})})})}),document.getElementById("root"));