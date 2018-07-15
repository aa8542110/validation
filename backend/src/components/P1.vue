<template>
<div id="app">
    <div id="process">
<el-steps :active="0" align-center>
        <el-step ></el-step>
        <el-step ></el-step>
        <el-step ></el-step>
        <el-step ></el-step>
</el-steps>
    </div>
    <div id="title">

    <span>Create Account</span>
    <h4>Glad to see you here!</h4>
    </div>
    <div class="form">
        <el-form label-position="top" label-width="80px" :model="formData">
  <el-form-item label="Account">
    <el-input v-model="formData.acc"></el-input>
  </el-form-item>
  <el-form-item label="Password">
    <el-input type="password" v-model="formData.pass"></el-input>
  </el-form-item>
  <el-form-item label="Confirm Password">
    <el-input type="password" v-model="formData.Cpass"></el-input>
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
        acc: '',
        pass: '',
        Cpass: '',
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
</style>

