import{r as n,j as e,H as u,a as d,T as h,I as x,b as p,F as g,S as j,c as m,X as C,u as S,L as w,d as L,O as v}from"./index-47eb697a.js";import{u as M}from"./useFilter-aa849393.js";import{C as E,S as f,M as l}from"./ClearButton-0ecd5e07.js";const k=s=>n.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},n.createElement("g",{id:"SWM icons / outline / search"},n.createElement("path",{id:"shape",d:"M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM20.5303 19.4697L16.3428 15.2821L15.2821 16.3428L19.4697 20.5303L20.5303 19.4697Z",fill:"currentColor"}))),H=s=>n.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},n.createElement("g",{id:"SWM icons / outline / arrow-down"},n.createElement("path",{id:"shape",d:"M7 10L12 15L17 10",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))),I=()=>{const[{input:s},t]=M();return e.jsx(u,{children:e.jsxs(d,{children:[e.jsxs(h,{children:[e.jsx(B,{title:"Evant Planner"}),e.jsx(b,{})]}),e.jsx(x,{children:e.jsx(F,{value:s,handleChange:t})})]})})},B=({title:s})=>e.jsx(p,{to:"/",children:s}),F=({value:s,handleChange:t})=>{function r({currentTarget:a}){t(a.value)}return e.jsxs(g,{children:[e.jsx(j,{component:k}),e.jsx(m,{value:s,onChange:r,placeholder:"Search by keywords","aria-label":"Search by keywords"}),s&&e.jsx(E,{handleClick:()=>t("")})]})},b=()=>{const[s,t]=n.useState("EN"),r=C(),{classes:a}=S({theme:r});function o(i){t(i.target.value)}const c={classes:{list:a.list,paper:a.paper}};return e.jsxs(f,{value:s,label:"language",onChange:o,input:e.jsx(w,{}),IconComponent:H,MenuProps:c,classes:{select:"select",icon:"selectIcon"},children:[e.jsx(l,{value:"EN",children:"EN"}),e.jsx(l,{value:"UA",children:"UA"})]})};function V(){return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx("main",{children:e.jsx(n.Suspense,{fallback:e.jsx(L,{}),children:e.jsx(v,{})})})]})}export{V as default};
