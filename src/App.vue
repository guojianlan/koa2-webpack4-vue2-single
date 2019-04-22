<template>
  <div>
    <router-link :to="{path:`/login`}">login</router-link>
    <router-link :to="{path:`/index`}">index</router-link>
    <router-view></router-view>
  </div>
 
</template>
<script>
import utils from './utils/index.js'
export default {
  
}
</script>
<style lang="scss">
@import "./assets/css/style.css";
body{
  background: #fff;
  font-size:14px;
  height:100%;
  width:100%;
  overflow: auto;
}
*{
  background:#fff;
  box-sizing: border-box;
  margin:0;
  padding:0;
}
</style>

