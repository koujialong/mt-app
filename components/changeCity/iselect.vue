<template>
  <div class="m-iselect">
    <span class="name">按省份选择：</span>
    <el-select v-model="pvalue" placeholder="省份">
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="cvalue" placeholder="城市">
      <el-option
        v-for="item in city"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <span class="name">直接搜索：</span>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文"
      @select="handleSelect"
    />
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: "iselect",
    data() {
      return {
        province: [],
        pvalue: '',
        city: [],
        cvalue: '',
        allCity: [],
        input: ''
      }
    },
    watch: {
      pvalue: async function (newPvalue) {
        let self = this;
        let {status, data: {city}} = await self.$axios.get(`/geo/province/${newPvalue}`)
        if (status === 200) {
          self.city = city.map(item => {
            return {
              value: item.id,
              label: item.name
            }
          })
          self.cvalue = ''
        }
      }
    },
    async mounted() {
      let self = this;
      let {status, data: {province}} = await self.$axios.get('/geo/province')
      if (status === 200) {
        self.province = province.map(item => {
          return {
            value: item.id,
            label: item.name
          }
        })
      }
    },
    methods: {
      querySearchAsync: _.debounce(async function (query, cb) {
        let self = this;
        if (self.allCity.length === 0) {
          let {status, data: {city}} = await self.$axios.get('/geo/city')
          if (status === 200 && city) {
            self.allCity = city.map(item => {
              return {
                value: item.name
              }
            })
          } else {
            self.allCity = []
          }
        }
        cb(self.allCity.filter(item => item.value.indexOf(query) > -1))
      }, 200),
      handleSelect(item) {
        console.log(this.allCity)
        let position={
          city:item.value
        }
        this.$store.commit('geo/setPosition',position)
        location.href='/'
      },
    }
  }
</script>

<style lang="scss">
  @import "./assets/css/changecity/iselect";
</style>
