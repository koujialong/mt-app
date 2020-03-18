<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item,idx) in $store.state.home.menu" :key="idx" @mouseenter="mouseenter">
        <i :class="item.type"/>{{item.name}}<span class="arrow"/>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="enterdetail" @mouseleave="livedetail">
      <template v-for="(item,idx) in curdetail.child" >
        <h4 :key="idx">{{item.title}}</h4>
        <span v-for="v in item.child" :key="v" @click="goList(v)">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "menu",
    data() {
      return {
        kind: '',
        menu: []
      }
    },
    computed: {
      curdetail: function () {
        return this.$store.state.home.menu.filter((item)=>item.type===this.kind)[0]
      }
    },
    methods:{
      mouseleave:function () {
        let self=this;
        self._timer=setTimeout(function () {
          self.kind=''
        },150)
      },
      mouseenter:function (e) {
          this.kind=e.target.querySelector('i').className
      },
      enterdetail:function () {
        clearTimeout(this._timer)
      },
      livedetail:function () {
        this.kind=''
      },
      goList(v){
        location.href=`/products?keyword=${encodeURIComponent(v)}`
      }
    }
  }
</script>

<style scoped>

</style>
