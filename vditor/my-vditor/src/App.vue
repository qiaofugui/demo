<script setup>
import { onMounted } from 'vue';
import Vditor from './components/MyVditor.vue'

onMounted(async () => {
  const baseURL = 'https://mock.apipark.cn/m1/4607482-4257185-default'
  const res = await fetch(`${baseURL}/test/user/list`, {
    method: 'GET',
  }).then(res => res.json())
  console.log(res)
})
</script>

<template>
  <Vditor />
</template>
