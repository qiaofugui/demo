<script setup>
import { onMounted, onUnmounted } from "vue"
import AMapLoader from "@amap/amap-jsapi-loader"

let map = null

onMounted(async () => {
  const AMap = await AMapLoader.load({
    key: '6d98827bc422cd080700dd5580579e7f', // 申请好的 Web 端开发者 Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [ // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      'AMap.AutoComplete',
      'AMap.PlaceSearch',
      'AMap.ToolBar',
      'AMap.ControlBar',
      'AMap.Scale',
      'AMap.HawkEye',
    ],
  })
  map = new AMap.Map('container', {
    // 设置地图容器 id
    viewMode: '3D', // 是否为 3D 地图模式
    zoom: 11, // 初始化地图级别
    center: [116.397428, 39.90923], // 初始化地图中心点位置
  })

  const scale = new AMap.Scale()
  const toolBar = new AMap.ToolBar({
    position: {
      top: '110px',
      right: '40px'
    }
  })
  const controlBar = new AMap.ControlBar({
    position: {
      top: '10px',
      right: '10px',
    }
  })
  const overView = new AMap.HawkEye({
    opened: false
  })
  map.addControl(scale)
  map.addControl(toolBar)
  map.addControl(controlBar)
  map.addControl(overView)

  //输入提示
  var autoOptions = {
    input: 'tipinput'
  };
  let auto = new AMap.AutoComplete(autoOptions)
  let placeSearch = new AMap.PlaceSearch({
    map
  })  //构造地点查询类
  auto.on('select', select) //注册监听，当选中某条记录时会触发
  function select (e) {
    placeSearch.setCity(e.poi.adcode)
    placeSearch.search(e.poi.name) //关键字查询查询
  }
})

onUnmounted(() => {
  map?.destroy()
})
</script>

<template>
  <input id="tipinput" />

  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>