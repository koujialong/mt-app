<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="5">
      <geo/>
    </el-col>
    <el-col :span="5">
      <user/>
    </el-col>
    <el-col :span="14">
      <nav-bar/>
    </el-col>
  </el-row>
</template>

<script>
  import geo from "./geo";
  import user from "./user";
  import NavBar from "./nav";

  export default {
    name: "index",
    components: {
      geo,
      user,
      NavBar
    }
  }
</script>

<style lang="scss">
  @import "./assets/css/public/header/topbar";
</style>
