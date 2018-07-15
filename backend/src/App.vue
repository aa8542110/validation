<template>

<router-view></router-view>


</template>
<script>
export default {
  name: 'App',
  data() {
    return {
    };
  },

  methods: {
    reload() {
      this.$router.go(0);
    },

  },
};
</script>


<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.pic {
  text-align: center;
  margin: 1em 0 2em 0;
}

#header-left {
  background: #03c95b;
  color: white;
}

.center-center {
  text-align: center;
  margin-top: 1.5em;
  transform: translate(0, -50%);
}
#row1 {
  height: 3em;
  background: #444956;
}
#row1 a {
  color: #999da3;
}
#sidebar {
  background: #fcfbfb;
  padding-top: 1em;
  min-height: 95vh;
}
#sidebar a {
  color: #836f86;
  font-size: 10pt;
}
#main {
  padding-top: 1em;
}
.card {
  margin-bottom: 1em;
}
.dropdown-menu li a {
  color: black !important;
}
#sidebar ul li {
  text-align: center;
  border-bottom: 1px #e9e8e8 solid;
  border-top: 1px#e9e8e8 solid;
}
td {
  word-break: break-all;
}
</style>
