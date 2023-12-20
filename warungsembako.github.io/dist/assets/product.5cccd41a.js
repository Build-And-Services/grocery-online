import{x as i,y as r}from"./index.1413d397.js";import{S as a}from"./sweetalert2.all.e9d3950e.js";const u=i("product",{state:()=>({_products:[],_product:null,addErrors:[],filter:"terbaru",filterCat:"default",kind:"date"}),getters:{products:e=>{if(e.kind=="date"){if(e.filter==="terbaru")return e._products;if(e.filter==="terlama")return[...e._products].reverse()}else return e._products.filter(t=>t.relationships.category.id==e.filterCat||e.filterCat=="default")},product:e=>e._product,errors:e=>e.addErrors},actions:{getToken(){return JSON.parse(localStorage.getItem("user")).token},async getProducts(){const e=await r.get("/api/product",{headers:{Authorization:"Bearer "+this.getToken()}});this._products=e.data.data},async getProductById(e){await this.getToken(),await r.get(`/api/product/${e}`,{headers:{Authorization:"Bearer "+this.getToken()}}).then(t=>{this._product=t.data.data})},async handleAddData(e){this.addErrors=[],await this.getToken();try{await r.post("/api/product",{unit_id:e.unit.id,category_id:e.category.id,name:e.name,desc:e.desc,price_buy:e.price_buy,price_sell:e.price_sell,qty:e.qty},{headers:{Authorization:"Bearer "+this.getToken()}}),a.fire({icon:"success",title:"Sukses!",text:"Data produk telah berhasil disimpan ke database."}),this.addErrors.length==0&&this.router.push({name:"data-produk"})}catch(t){t.response.status===422?this.addErrors=t.response.data.errors:t.response.status===409&&(this.addErrors.product=["Produk sudah ada dalam database."])}},async handleUpdateData(e,t){this.addErrors=[],await this.getToken();try{await r.put(`/api/product/${t}`,{unit_id:e.unit.id,category_id:e.category.id,name:e.name,desc:e.desc,price_buy:e.price_buy,price_sell:e.price_sell,qty:e.qty},{headers:{Authorization:"Bearer "+this.getToken()}}).then(this.router.push({name:"data-produk"}))}catch(s){s.response.status===422&&(this.addErrors=s.response.data.errors)}},async handleDeleteData(e){await this.getToken(),await r.delete(`/api/product/${e}`,{headers:{Authorization:"Bearer "+this.getToken()}}).then(()=>{const t=this.products.findIndex(s=>s.id===e);this.products.splice(t,1)})},setFilter(e,t){this.kind=e,this.filter=t},setFilterCategory(e,t){this.kind=e,this.filterCat=t}}});export{u};
