<script setup>
import { ref } from 'vue'
import { useMessage } from "naive-ui"
import { VueCropper } from "vue-cropper"
import 'vue-cropper/dist/index.css'

import { debounce } from '@/utils/property'

const message = useMessage()

const showModal = ref(false)
const beforeUpload = (data) => {
  let img = ["image/png", "image/jpg", "image/jpeg", "image/PNG", "image/JPG", "image/JPEG"]
  if (!img.includes(data.file.file?.type)) {
    message.error("只能上传png格式的图片文件，请重新上传")
    return false
  }
  return true
}
const customRequest = async (data) => {
  const base64 = await convertImageToBase64(data.file.file)
  options.value.img = base64
}
const convertImageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

const cropperRef = ref(null)
// 裁剪相关配置
const options = ref({
  img: "https://avatars2.githubusercontent.com/u/15681693?s=460&v=4", // 需要剪裁的图片
  autoCrop: true, // 是否默认生成截图框
  fixedBox: false, // 是否固定截图框的大小 不允许改变
  info: true, // 裁剪框的大小信息
  fixed: false, // 是否开启截图框宽高固定比例
  fixedNumber: [1, 1], // 截图框的宽高比例 需要配合centerBox一起使用才能生效
  centerBox: true, // 截图框是否被限制在图片里面
  infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
})
const previews = ref('')
// 裁剪之后的数据
const realTime = (data) => {
  debounce(() => {
    finish()
  }, 200)()
}
// 放大缩小
const changeScale = (num = 1) => {
  cropperRef.value.changeScale(num)
}
// 左旋转
const rotateLeft = () => {
  cropperRef.value.rotateLeft()
}
// 右旋转
const rotateRight = () => {
  cropperRef.value.rotateRight()
}
// 刷新
const refreshCrop = () => {
  cropperRef.value.refresh()
}
const finish = (type = 'base64') => {
  if (type === 'blob') {
    cropperRef.value.getCropBlob((data) => {
      previews.value = window.URL.createObjectURL(data)
    })
  } else {
    cropperRef.value.getCropData((data) => {
      previews.value = data
    })
  }
}
</script>

<template>
  <n-space>
    <n-avatar
      round
      :size="68"
      src="https://avatars2.githubusercontent.com/u/15681693?s=460&v=4"
      class="cursor-pointer custom-avatar"
      @click="showModal = true"
    />
  </n-space>
  <n-modal
    v-model:show="showModal"
    style="width: 800px;height: 500px"
    preset="card"
    title="上传头像"
    size="huge"
  >
    <div class="h-full flex">
      <div class="h-full w-7/12">
        <VueCropper
          ref="cropperRef"
          :img="options.img"
          :info="true"
          :infoTrue="options.infoTrue"
          :auto-crop="options.autoCrop"
          :fixed-box="options.fixedBox"
          :fixedNumber="options.fixedNumber"
          :fixed="options.fixed"
          :centerBox="options.centerBox"
          @realTime="realTime"
        />
        <n-space class="mt-4">
          <n-button @click="changeScale(1)">放大</n-button>
          <n-button @click="changeScale(-1)">缩小</n-button>
          <n-button @click="rotateLeft">左转</n-button>
          <n-button @click="rotateRight">右转</n-button>
          <n-button @click="refreshCrop">重置</n-button>
          <n-upload
            action=""
            :show-file-list="false"
            @before-upload="beforeUpload"
            :custom-request="customRequest"
          >
            <n-button type="primary">上传</n-button>
          </n-upload>
        </n-space>
      </div>
      <div class="h-full flex justify-center items-center w-5/12">
        <n-image
          width="200"
          height="200"
          style="border:1px solid #eee"
          preview-disabled
          :src="previews"
        />
      </div>
    </div>
    <template #footer>
      <div class="flex justify-end">
        <n-space>
          <n-button type="primary">确认</n-button>
          <n-button>取消</n-button>
        </n-space>
      </div>
    </template>
  </n-modal>
</template>

<style lang="less" scoped>
.custom-avatar {
  position: relative;

  &:hover {
    &::after {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      content: "更换头像";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .6);
      transition: all 0.4s;
    }
  }
}
</style>