<template>
  <div class="m-crumbs">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{path:'/'}">{{$store.state.geo.position.city.replace('市','')}}美团</el-breadcrumb-item>
      <el-breadcrumb-item><a
        href="/">{{$store.state.geo.position.city.replace('市','')}}{{decodeURIComponent(keyword)}}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "crumbs",
    props: {
      keyword: {
        type: String,
        default: '详情'
      }
    }
  }
</script>

<style scoped>

</style>
