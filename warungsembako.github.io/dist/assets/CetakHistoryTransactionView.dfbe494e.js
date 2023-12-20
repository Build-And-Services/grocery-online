import{g as J,h as _,r as b,i as C,a,j as i,b as o,w as r,c as y,u as c,m as U,k as p,e as l,F as v,l as I,t as g,n as K,p as Y,q as z,s as G,v as O,o as Q,d as W}from"./index.1413d397.js";import{_ as L}from"./CardBoxModal.b66e5ef7.js";import{_ as T,a as M}from"./BaseButtons.c800c2c3.js";import{u as X}from"./transaction.213c1f35.js";import{r as P}from"./index.e49ded49.js";import"./sweetalert2.all.e9d3950e.js";const Z=l("p",null,[O("Lorem ipsum dolor sit amet "),l("b",null,"adipiscing elit")],-1),ee=l("p",null,"This is sample modal",-1),te=l("p",null,"Apakah anda yakin menghapus data ini?",-1),ae=l("th",null,"No",-1),le={key:0},ne=["data-label"],se={key:0,class:"before:hidden lg:w-1 whitespace-nowrap"},oe={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ie={__name:"TableDatacust",props:{items:{type:Array,default:()=>[]},thead:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},link:{type:String,default:null},linkEdit:{type:String,default:null},linkDetail:{type:String,default:null},isEdit:{type:Boolean,default:!0},isDelete:{type:Boolean,default:!0},isDetail:{type:Boolean,default:!0},add:{type:Boolean,default:!0},action:{type:Boolean,default:!0}},emits:["update:modelValue","cancel","confirm"],setup(n,{emit:w}){const f=n,D=J(),e=_(()=>f.items),N=b(),B=b(!1),k=b(!1),h=b(100),d=b(0),S=_(()=>e.value.slice(h.value*d.value,h.value*(d.value+1))),$=_(()=>Math.ceil(e.value.length/h.value)),x=_(()=>d.value+1),A=_(()=>{const u=[];for(let m=0;m<$.value;m++)u.push(m);return u}),E=()=>{w("confirm",N.value)},R=u=>{D.push({name:f.linkEdit,params:{id:u}})},H=u=>{D.push({name:f.linkDetail,params:{id:u}})},j=u=>{k.value=!0,N.value=u};return(u,m)=>{const F=C("RouterLink");return a(),i(v,null,[o(L,{modelValue:B.value,"onUpdate:modelValue":m[0]||(m[0]=t=>B.value=t),title:"Sample modal"},{default:r(()=>[Z,ee]),_:1},8,["modelValue"]),o(L,{modelValue:k.value,"onUpdate:modelValue":m[1]||(m[1]=t=>k.value=t),title:"Konfirmasi",button:"danger","button-label":"Ya","has-cancel":"",onConfirm:E},{default:r(()=>[te]),_:1},8,["modelValue"]),n.add?(a(),y(F,{key:0,to:{name:n.link}},{default:r(()=>[o(T,{color:"success",label:"Tambah Data",icon:c(U),class:"mb-2"},null,8,["icon"])]),_:1},8,["to"])):p("",!0),l("table",null,[l("thead",null,[l("tr",null,[ae,(a(!0),i(v,null,I(n.thead,(t,V)=>(a(),i("th",{key:V},g(t),1))),128)),n.action?(a(),i("th",le)):p("",!0)])]),l("tbody",null,[(a(!0),i(v,null,I(c(S),(t,V)=>(a(),i("tr",{key:t.id},[l("td",null,g(V+1),1),(a(!0),i(v,null,I(n.columns,(s,q)=>(a(),i("td",{key:q,"data-label":s.label},g(s.type=="relationships"?s.keyItems(s.relationships(t.relationships))?s.keyItems(s.relationships(t.relationships)):"-":s.keyItems(t.attributes)?s.keyItems(t.attributes):"-"),9,ne))),128)),n.action?(a(),i("td",se,[o(M,{type:"justify-start lg:justify-end","no-wrap":""},{default:r(()=>[n.isEdit?(a(),y(T,{key:0,color:"warning",icon:c(K),small:"",onClick:s=>R(t.id)},null,8,["icon","onClick"])):p("",!0),n.isDetail?(a(),y(T,{key:1,color:"info",icon:c(Y),small:"",onClick:s=>H(t.id)},null,8,["icon","onClick"])):p("",!0),n.isDelete?(a(),y(T,{key:2,color:"danger",icon:c(z),small:"",onClick:s=>j(t.id)},null,8,["icon","onClick"])):p("",!0)]),_:2},1024)])):p("",!0)]))),128))])]),l("div",oe,[o(G,null,{default:r(()=>[o(M,null,{default:r(()=>[(a(!0),i(v,null,I(c(A),t=>(a(),y(T,{key:t,active:t===d.value,label:t+1,color:t===d.value?"lightDark":"whiteDark",small:"",onClick:V=>d.value=t},null,8,["active","label","color","onClick"]))),128))]),_:1}),l("small",null,"Page "+g(c(x))+" of "+g(c($)),1)]),_:1})])],64)}}},re=l("h1",{class:"text-center text-2xl mb-4"},"Riwayat Transaksi",-1),fe={__name:"CetakHistoryTransactionView",setup(n){const w=X(),f=["Tgl Transaksi","No. Transaksi","Nama","Jumlah","Harga","Total"],D=[{type:"attributes",label:"Tgl Transaksi",keyItems:e=>e.created_at},{type:"attributes",label:"No. Transaksi",keyItems:e=>e.transaction_number},{type:"relationships",label:"Nama",relationships:e=>e.product,keyItems:e=>e.attributes.name},{type:"attributes",label:"Jumlah",keyItems:e=>e.qty},{type:"relationships",label:"Harga",relationships:e=>e.product,keyItems:e=>P.formatNumberToCurrency(Math.ceil(e.attributes.price_sell))},{type:"attributes",label:"Total",keyItems:e=>P.formatNumberToCurrency(Math.ceil(e.total))}];return Q(async()=>{await w.getTransactions(),window.print()}),(e,N)=>{const B=C("BaseButton"),k=C("RouterLink"),h=C("SectionMain"),d=C("LayoutAuthenticated");return a(),y(d,null,{default:r(()=>[o(h,null,{default:r(()=>[o(W,null,{default:r(()=>[re,o(k,{to:"data-riwayat-transaksi-cetak"},{default:r(()=>[o(B,{color:"success",label:"Cetak Data",icon:e.mdiPlus,class:"mb-2"},null,8,["icon"])]),_:1}),o(ie,{items:c(w).transactions,add:!1,"is-edit":!1,"is-detail":!1,"is-delete":!1,thead:f,paginate:!1,columns:D},null,8,["items"])]),_:1})]),_:1})]),_:1})}}};export{fe as default};