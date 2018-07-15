<template>
<div id="app">
    <div id="process">
<el-steps :active="1" align-center>
        <el-step ></el-step>
        <el-step ></el-step>
        <el-step ></el-step>
        <el-step ></el-step>
</el-steps>
    </div>
    <div id="title">

    <span>General Infomation</span>
    <h4>Tell us who you are!</h4>
    </div>
    <div class="form">
        <el-form label-position="top" label-width="80px" :model="formData">
  <el-form-item label="Name (optional)">
    <el-input v-model="formData.name"></el-input>
  </el-form-item>
  <el-form-item label="Phone">
    <el-input type="password" v-model="formData.phone"></el-input>
  </el-form-item>
  <el-form-item  label="Birth Day">
    <div class="c-3">
    <el-input  v-model="formData.birthDay.yy" placeholder="YY"></el-input>
    <el-input  v-model="formData.birthDay.mm" placeholder="MM"></el-input>
    <el-input  v-model="formData.birthDay.dd" placeholder="DD"></el-input>
    </div>
  </el-form-item>
</el-form>
    </div>
      <el-button type="primary" disabled round> SUBMIT & NEXT</el-button>
</div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        birthDay: {
          yy: '',
          mm: '',
          dd: '',
        },
        address: {
          city: '',
          dist: '',
          detail: '',
        },
      },
    };
  },
  methods: {},
  created() {},
};
</script>
<style>
#app {
  width: 40%;
  display: flex;
  margin: auto;
  border-top: 8px solid #0275d8;
  flex-direction: column;

}
#process{
    margin-top:  10vh;
    width: 100%;
    margin-bottom: 50px;
}
#title{
    text-align: center
}
#title>span{
    font-size: 32pt;
}
.el-form-item__label{
color: #000;
font-size: 16pt
}
.el-input__inner{
    border: 1px solid #000;
}
.el-button{
    font-size: 18pt
}
.c-3{
  display: flex;
  justify-content:space-between;

}
.c-3 .el-input__inner{
width: 90%;}

</style>

