"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[419],{7419:function(e,o,t){t.r(o),t.d(o,{default:function(){return u}});var r=function(){var e=this,o=e._self._c;return o("div",{staticStyle:{width:"80%"}},[o("div",{staticStyle:{"margin-bottom":"30px"}},[e._v("编辑图书")]),o("el-form",{ref:"ruleForm",attrs:{inline:!0,rules:e.rules,model:e.form,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"图书标准码",prop:"bookNo"}},[o("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择"},on:{change:e.selBook},model:{value:e.form.bookNo,callback:function(o){e.$set(e.form,"bookNo",o)},expression:"form.bookNo"}},e._l(e.books,(function(e){return o("el-option",{key:e.id,attrs:{label:e.bookNo,value:e.bookNo}})})),1)],1),o("el-form-item",{attrs:{label:"图书名称",prop:"bookName"}},[o("el-input",{attrs:{disabled:""},model:{value:e.form.bookName,callback:function(o){e.$set(e.form,"bookName",o)},expression:"form.bookName"}})],1),o("el-form-item",{attrs:{label:"所需积分",prop:"score"}},[o("el-input",{attrs:{disabled:""},model:{value:e.form.score,callback:function(o){e.$set(e.form,"score",o)},expression:"form.score"}})],1),o("el-form-item",{attrs:{label:"图书数量",prop:"nums"}},[o("el-input",{attrs:{disabled:""},model:{value:e.form.nums,callback:function(o){e.$set(e.form,"nums",o)},expression:"form.nums"}})],1),o("br"),o("el-form-item",{attrs:{label:"会员码",prop:"userNo"}},[o("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:e.selUser},model:{value:e.form.userNo,callback:function(o){e.$set(e.form,"userNo",o)},expression:"form.userNo"}},e._l(e.users,(function(e){return o("el-option",{key:e.id,attrs:{label:e.username,value:e.username}})})),1)],1),o("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[o("el-input",{attrs:{disabled:""},model:{value:e.form.userName,callback:function(o){e.$set(e.form,"userName",o)},expression:"form.userName"}})],1),o("el-form-item",{attrs:{label:"用户联系方式",prop:"userPhone"}},[o("el-input",{attrs:{disabled:""},model:{value:e.form.userPhone,callback:function(o){e.$set(e.form,"userPhone",o)},expression:"form.userPhone"}})],1),o("el-form-item",{attrs:{label:"用户账户积分",prop:"account"}},[o("el-input",{attrs:{disabled:""},model:{value:e.form.account,callback:function(o){e.$set(e.form,"account",o)},expression:"form.account"}})],1),o("el-form-item",{attrs:{label:"借出的天数",prop:"days"}},[o("el-input-number",{attrs:{min:1,max:30,label:"借出的天数"},model:{value:e.form.days,callback:function(o){e.$set(e.form,"days",o)},expression:"form.days"}})],1)],1),o("div",{staticStyle:{"text-align":"center","margin-top":"30px"}},[o("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.save}},[e._v("提交")])],1)],1)},s=[],a=(t(7658),t(4471)),l={name:"EditBook",data(){return{form:{},books:[],users:[],rules:{bookNo:[{required:!0,message:"请输入图书标准码",trigger:"blur"}],userNo:[{required:!0,message:"请输入会员码",trigger:"blur"}]}}},created(){a.Z.get("/book/list").then((e=>{this.books=e.data})),a.Z.get("/user/list").then((e=>{this.users=e.data.filter((e=>e.status))}));const e=this.$route.query.id;a.Z.get("/borrow/"+e).then((e=>{this.form=e.data}))},methods:{save(){a.Z.put("/borrow/update",this.form).then((e=>{"200"===e.code?(this.$notify.success("更新成功"),this.$router.push("/bookList")):this.$notify.error(e.msg)}))},selBook(){const e=this.books.find((e=>e.bookNo===this.form.bookNo));a.Z.get("/book/"+e.id).then((e=>{this.form.bookName=e.data.name,this.form.score=e.data.score,this.form.nums=e.data.nums}))},selUser(){const e=this.users.find((e=>e.username===this.form.userNo));a.Z.get("/user/"+e.id).then((e=>{this.form.userName=e.data.name,this.form.userPhone=e.data.phone,this.form.account=e.data.account}))}}},n=l,i=t(1001),m=(0,i.Z)(n,r,s,!1,null,null,null),u=m.exports}}]);
//# sourceMappingURL=419.8af93b74.js.map