<script setup>
import Vditor from 'vditor'
import 'vditor/dist/index.css'

import { ref, onMounted } from 'vue'

const vditorRef = ref(null)

onMounted(() => {
  vditorRef.value = new Vditor('vditor', {
    width: '90vw',
    height: '80vh'
  })
})

</script>

<template>
  <div style="margin: 50px auto;" ref="vditorRef" id="vditor"></div>
</template>
