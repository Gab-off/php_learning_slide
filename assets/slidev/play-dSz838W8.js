const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DrawingControls-CtdXmMxU.js","./DrawingControls.vue_vue_type_style_index_0_lang-BYvWG_rb.js","../modules/vue-CX4oAgP-.js","../modules/shiki-DdC_56WP.js","../modules/shiki-Bxv373Z5.css","./SlideWrapper-BzhxA1p2.js","../index-DxhUuPkq.js","../index-BMzSGpXF.css","../SlideWrapper-2uwFe7eL.css","./IconButton.vue_vue_type_script_setup_true_lang-CLDdGZHj.js","./shortcuts-B52p95f1.js","./context-DMpFvolL.js","../modules/unplugin-icons-CBsOl5ep.js","../shortcuts-BbJOi48n.css","../DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{z as b,E as L,ao as N,ap as H,d as h,ad as z,b as f,o as a,aq as U,f as g,i as d,C as e,g as i,j as A,n as E,an as D,w as R,ac as F,Q as x,F as I,e as v,k as O,r as W}from"../modules/vue-CX4oAgP-.js";import{c as j,a as q}from"./SlideWrapper-BzhxA1p2.js";import{q as G,v as V,a as P,w as K,x as C,y as $,d as S,j as k,z as Q,A as c,B as w,D as X}from"../index-DxhUuPkq.js";import{c as Y,G as J,d as Z,u as ee,r as te,a as oe,o as se,b as ae,S as ne}from"./shortcuts-B52p95f1.js";import{b as le}from"../modules/unplugin-icons-CBsOl5ep.js";import"../modules/shiki-DdC_56WP.js";import"./context-DMpFvolL.js";import"./IconButton.vue_vue_type_script_setup_true_lang-CLDdGZHj.js";const ie=2e3;function re(m){const n=b(()=>m.value&&G.value);function r(){document.body.style.cursor="none"}function s(){document.body.style.cursor=""}L(n,u=>{u||s()}),H(s);let t=null;N(document.body,["pointermove","pointerdown"],()=>{s(),t&&clearTimeout(t),n.value?t=setTimeout(r,ie):t=null},{passive:!0})}const ue=""+new URL("../logo-BYkHSa_O.png",import.meta.url).href,de={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-modal"},ce=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:n}){const r=m,t=z(r,"modelValue",n);function u(){t.value=!1}return(_,o)=>(a(),f(U,null,[e(t)?(a(),g("div",de,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=p=>u())}),i("div",{class:E(["m-auto rounded-md bg-main shadow",r.class]),"dark:border":"~ main"},[A(_.$slots,"default")],2)])):d("v-if",!0)],1024))}}),me={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},pe=["innerHTML"],fe=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:n}){const t=z(m,"modelValue",n),u=b(()=>typeof V.info=="string");return(_,o)=>(a(),f(ce,{modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=p=>D(t)?t.value=p:null),class:"px-6 py-4"},{default:R(()=>[i("div",me,[u.value?(a(),g("div",{key:0,class:"mb-4",innerHTML:e(V).info},null,8,pe)):d("v-if",!0),o[1]||(o[1]=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:ue,alt:"Slidev logo"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),F("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ve=h({__name:"Controls",setup(m){const{isEmbedded:n}=P(),r=!V.drawings.presenterOnly&&!n.value,s=x();r&&K(()=>import("./DrawingControls-CtdXmMxU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url).then(_=>s.value=_.default);const t=x(),u=x();return(_,o)=>(a(),g(I,null,[s.value?(a(),f(e(s),{key:0})):d("v-if",!0),v(Y),v(J),t.value?(a(),f(e(t),{key:1})):d("v-if",!0),u.value?(a(),f(e(u),{key:2,modelValue:e(C),"onUpdate:modelValue":o[0]||(o[0]=p=>D(C)?C.value=p:null)},null,8,["modelValue"])):d("v-if",!0),e(V).info?(a(),f(fe,{key:3,modelValue:e($),"onUpdate:modelValue":o[1]||(o[1]=p=>D($)?$.value=p:null)},null,8,["modelValue"])):d("v-if",!0),v(Z)],64))}}),_e={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ge=h({__name:"PresenterMouse",setup(m){return(n,r)=>{const s=le;return e(S).cursor?(a(),g("div",_e,[v(s,{class:"absolute stroke-white dark:stroke-black",style:O({left:`${e(S).cursor.x}%`,top:`${e(S).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):d("v-if",!0)}}}),$e=h({__name:"play",setup(m){const{next:n,prev:r,isPrintMode:s,isPlaying:t,isEmbedded:u}=P(),{isDrawing:_}=j(),o=W();function p(l){var y;k.value||l.button===0&&((y=l.target)==null?void 0:y.id)==="slide-container"&&(l.pageX/window.innerWidth>.5?n():r())}ee(o),te(),oe(),re(b(()=>t.value&&!u.value&&!k.value));const M=b(()=>Q.value||k.value),T=x(),B=b(()=>{let l="";return c.value.brightness!==w.brightness&&(l+=`brightness(${c.value.brightness}) `),c.value.contrast!==w.contrast&&(l+=`contrast(${c.value.contrast}) `),c.value.sepia!==w.sepia&&(l+=`sepia(${c.value.sepia}) `),c.value.hueRotate!==w.hueRotate&&(l+=`hue-rotate(${c.value.hueRotate}deg) `),c.value.invert&&(l+="invert(1) "),{filter:l}});return(l,y)=>(a(),g(I,null,[i("div",{id:"page-root",ref_key:"root",ref:o,class:E(["grid",e(X)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[v(q,{style:{background:"var(--slidev-slide-container-background, black)"},"is-main":"","content-style":B.value,onPointerdown:p,onContextmenu:e(se)},{default:R(()=>[v(ne,{"render-context":"slide"}),v(ge)]),controls:R(()=>[e(s)?d("v-if",!0):(a(),g("div",{key:0,class:E(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[M.value?"!opacity-100 right-0":"opacity-0 p-2",e(_)?"pointer-events-none":""]])},[v(ae,{persist:M.value},null,8,["persist"])],2))]),_:1},8,["content-style","onContextmenu"]),T.value&&e(k)?(a(),f(e(T),{key:0,resize:!0})):d("v-if",!0)],2),e(s)?d("v-if",!0):(a(),f(ve,{key:0})),y[0]||(y[0]=i("div",{id:"twoslash-container"},null,-1))],64))}});export{$e as default};
