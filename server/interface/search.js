import Router from 'koa-router';
import axios from './utils/axios'
import Poi from "../dbs/models/poi";

let router = new Router({prefix: '/search'})

const sign = 'a3c9fe0782107295ee9f1709edd15218'

router.get('/top', async (ctx,) => {
  // let poi = await Poi.find()
  // ctx.body = {
  //   province: poi.map(item => {
  //     return {
  //       id: item.id,
  //       name: item.value[0]
  //     }
  //   })
  // }
  let {status, data: {top}} = await axios.get(`http://cp-tools.cn/search/top`,{
    params:{
      city:ctx.query.city,
      input:ctx.query.input,
      sign:sign
    }
  })
  ctx.body={
    top:status===200?top:[]
  }
})

router.get('/hotPlace', async (ctx,) => {
  // let poi = await Poi.find()
  // ctx.body = {
  //   province: poi.map(item => {
  //     return {
  //       id: item.id,
  //       name: item.value[0]
  //     }
  //   })
  // }
  let {status, data: {result}} = await axios.get(`http://cp-tools.cn/search/hotPlace`,{
    params:{
      city:ctx.query.city,
      sign:sign
    }
  })
  ctx.body={
    result:status===200?result:[]
  }
})

router.get('/hotPlace', async (ctx,) => {
  // let poi = await Poi.find()
  // ctx.body = {
  //   province: poi.map(item => {
  //     return {
  //       id: item.id,
  //       name: item.value[0]
  //     }
  //   })
  // }
  let {status, data: {result}} = await axios.get(`http://cp-tools.cn/search/hotPlace`,{
    params:{
      city:ctx.query.city,
      sign:sign
    }
  })
  ctx.body={
    result:status===200?result:[]
  }
})

router.get('/resultsByKeywords',async (ctx)=>{
  const {city,keyword}=ctx.query;
  let {status,data:{count,pois}}=await axios.get(`http://cp-tools.cn/search/resultsByKeywords`,{
    params:{
      city,
      keyword,
      sign
    }
  })
  ctx.body={
    count:status===200?count:0,
    pois:status===200?pois:[]
  }
})

export default router
