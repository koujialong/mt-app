<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        idx="0"
        keyword="景点">全部
      </dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        idx="1"
        keyword="美食">约会聚餐
      </dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        idx="2"
        keyword="丽人">丽人SPA
      </dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        idx="3"
        keyword="电影">电影演出
      </dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        idx="4"
        keyword="旅游">品质出游
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,idx) in list[kind]" :key="idx">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.img" shadow="never"/>
          <ul class="cbody">
            <li class="title">{{item.title}}</li>
            <li class="pos">{{item.pos}}</li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "artistic",
    data() {
      return {
        kind: 'all',
        cur: [],
        list: {
          all: [],
          part: [],
          spa: [],
          movie: [],
          travel: []
        }
      }
    },
    // async asyncData(ctx) {
    //   let {status, data: {count, pois}} = await ctx.$axios.get('/search/resultsByKeywords', {
    //     params: {
    //       keyword:'景点',
    //       city: self.$store.state.geo.position.city
    //     }
    //   })
    //   return {
    //     pois
    //   }
    // },
    mounted() {
      this.getList('景点')
    },
    methods: {
      over: function (e) {
        let dom = e.target
        let tag = dom.tagName.toLowerCase()
        if (tag === 'dd') {
          let kind = dom.getAttribute('kind');
          this.kind = kind;
          let keyword = dom.getAttribute('keyword');
          this.getList(keyword)
        }
      },
      async getList(keyword){
        let self=this
        let {status, data: {count, pois}} = await this.$axios.get('/search/resultsByKeywords', {
          params: {
            keyword,
            city: self.$store.state.geo.position.city
          }
        })
        if (status === 200 && count > 0) {
          let r = pois.filter(item => item.photos.length).map(item => {
            return {
              title: item.name,
              pos: item.type.split(';')[0],
              price: item.biz_ext.cost || '暂无',
              img: item.photos[0].url,
              url: '//abc.com'
            }
          })
          self.list[self.kind] = r.slice(0, 9)
        } else {
          self.list[self.kind] = []
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/css/index/artistic.scss";
</style>
