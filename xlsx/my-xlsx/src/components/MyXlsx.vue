<script setup>
import { onMounted } from 'vue'
import * as xlsx from 'xlsx'
import { useMessage } from 'naive-ui'

const message = useMessage()

onMounted(() => {
  console.log(xlsx)
})

const beforeUpload = (data) => {
  const isXlS = data.file.file?.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || data.file.file?.type === 'application/vnd.ms-excel'

  if (!isXlS) {
    message.error('只能上传 Excel 文件，请重新上传')
    return false
  }
  return true
}

const customRequest = async (op) => {
  // 获取上传的excel  并解析数据
  let file = op.file.file
  let dataBinary = await readFile(file)
  let workBook = xlsx.read(dataBinary, { type: "binary", cellDates: true })
  let workSheet = workBook.Sheets[workBook.SheetNames[0]]
  const excelData = xlsx.utils.sheet_to_json(workSheet, { header: 1 })
  console.log(excelData)
}

const readFile = (file) => {
  return new Promise((resolve) => {
    let reader = new FileReader()
    reader.onload = (ev) => {
      resolve(ev.target?.result)
    }
    reader.readAsBinaryString(file)
  })
}
</script>

<template>
  <n-upload directory-dnd action="" :max="1" :custom-request="customRequest" @before-upload="beforeUpload">
    <n-upload-dragger>
      <n-text style="font-size: 16px">
        点击或者拖动文件到该区域来上传
      </n-text>
      <n-p depth="3" style="margin: 8px 0 0 0">
        请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
      </n-p>
    </n-upload-dragger>
  </n-upload>
</template>
