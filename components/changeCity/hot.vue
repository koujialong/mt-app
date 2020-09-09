<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市：</dt>
      <dd
        v-for="item in list"
        :key="item.id" @click="handleSelect(item)">{{ item.name==='市辖区'?item.province:item.name }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[]
    }
  },
  async mounted(){
    let {status,data:{hots}}=await this.$axios.get('/geo/hotCity')
    if(status===200){
      this.list=hots
    }
  },
  methods:{
    handleSelect(item) {
      let position={
        city:item.name
      }
      this.$store.commit('geo/setPosition',position)
      // location.href='/'
      this.$router.push('/')
    },
  }
}
</script>

<style lang="scss">
  @import "./assets/css/changeCity/hot.scss";
</style>
