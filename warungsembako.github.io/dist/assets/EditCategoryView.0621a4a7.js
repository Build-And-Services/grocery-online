import{M as p,o as g,c as y,w as t,_ as h,X as k,a as l,b as e,d as b,K as c,z as x,u as r,j as C,e as _,t as $,k as v,f as w,i as V,O as B}from"./index.1413d397.js";import{_ as N,a as R}from"./FormControl.6c1c486e.js";import{a as S,_ as m}from"./BaseButtons.c800c2c3.js";import"./satuan.eb6c967f.js";import{u as K}from"./category.6262624f.js";import"./product.5cccd41a.js";import"./sweetalert2.all.e9d3950e.js";const D=_("h1",{class:"text-center text-2xl mb-4"},"Edit Data Kategori",-1),E={key:0},L={class:"text-red-400 text-sm p-2"},q={__name:"EditCategoryView",setup(M){const d=k(),a=K(),o=p({category:""}),n=d.params.id,u=()=>{o.category=""};return g(async()=>{await a.getCategoryById(n),o.category=a.category.attributes.category}),(z,s)=>{const f=V("RouterLink");return l(),y(h,null,{default:t(()=>[e(w,null,{default:t(()=>[e(b,{"is-form":"",onSubmit:s[1]||(s[1]=c(i=>r(a).handleUpdateData(o,r(n)),["prevent"]))},{footer:t(()=>[e(S,null,{default:t(()=>[e(m,{type:"submit",color:"info",label:"Submit"}),e(m,{type:"reset",color:"danger",outline:"",label:"Reset",onClick:c(u,["prevent"])},null,8,["onClick"])]),_:1})]),default:t(()=>[e(f,{to:{name:"data-kategori"},class:"hover:text-indigo-600"},{default:t(()=>[e(x,{path:r(B),size:"34",w:"",h:"h-16"},null,8,["path"])]),_:1}),D,e(N,{label:"Nama Kategori"},{default:t(()=>[e(R,{modelValue:o.category,"onUpdate:modelValue":s[0]||(s[0]=i=>o.category=i),placeholder:"Nama Kategori..."},{default:t(()=>[r(a).errors.category?(l(),C("div",E,[_("span",L,$(r(a).errors.category[0]),1)])):v("",!0)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{q as default};