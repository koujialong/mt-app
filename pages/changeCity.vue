<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <iselect/>
      </el-col>
      <el-col :span="24">
        <hot/>
      </el-col>
      <el-col :span="24">
        <categroy/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import iselect from "../components/changeCity/iselect";
  import hot from "../components/changeCity/hot";
  import categroy from "../components/changeCity/categroy";

  export default {
    name: "changeCity",
    components: {
      iselect,
      hot,
      categroy
    }
  }
</script>

<style lang="css">

</style>
