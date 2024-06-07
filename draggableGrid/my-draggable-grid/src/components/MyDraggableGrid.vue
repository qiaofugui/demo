<template>
  <div class="layout-box">
    <GridLayout
      v-model:data="layout"
      @draggableStart="draggableStart"
      @draggableHandle="draggableHandle"
      @draggableEnd="draggableEnd"
      @remove="remove"
    >
      <GridItem
        v-for="item in layout"
        :key="item.id"
        :id="item.id"
      >
        {{ item.static ? `${item.id}-static` : item.id }}
      </GridItem>
    </GridLayout>
  </div>
</template>

<script setup lang="ts">
import { GridLayout, GridItem } from 'vue3-draggable-grid'
import 'vue3-draggable-grid/dist/style.css'
import { ref, watch } from 'vue'

const layout = ref([
  { id: '1', x: 1, y: 1, h: 2, w: 2, static: true },
  { id: '2', x: 5, y: 1, h: 1, w: 1 },
  { id: '3', x: 3, y: 1, h: 1, w: 1 },
  { id: '4', x: 4, y: 1, h: 1, w: 1 },
  { id: '5', x: 3, y: 2, h: 1, w: 1 },
  { id: '6', x: 1, y: 3, h: 1, w: 1 },
  { id: '7', x: 1, y: 4, h: 1, w: 1 },
  { id: '8', x: 1, y: 5, h: 4, w: 1 },
  { id: '9', x: 4, y: 2, h: 1, w: 1 },
  { id: '10', x: 2, y: 3, h: 1, w: 1 },
  { id: '11', x: 2, y: 4, h: 1, w: 1 },
  { id: '12', x: 5, y: 5, h: 1, w: 2 },
  { id: '13', x: 6, y: 6, h: 1, w: 1 },
  { id: '14', x: 6, y: 7, h: 1, w: 1 },
])

// 验证更新数据是否正确
watch(layout, () => {
  console.log('数据更新', layout.value)
}, {deep: true})

const draggableStart = (id) => {
  console.log('拖拽开始', id)
}

const draggableHandle = (id, data) => {
  console.log('拖拽中', id, data)
}

const draggableEnd = (data) => {
  console.log('拖拽结束', data)
}

const remove = (id) => {
  console.log('删除', id)
}

</script>
<style>
.layout-box {
  width: 100%;
}
</style>