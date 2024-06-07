<script setup>
import { ref } from "vue"
const fApi = ref({})
const validator1 = (rule, value, callback) => {
  if (value === '123') return callback()
  return new Error()
}
const rule = ref([
  {
    "type": "input",
    "field": "input",
    "title": "输入框",
    "info": "",
    "$required": true,
    "props": {
      "placeholder": "校验邮箱",
      "clearable": true
    },
    "_fc_id": "id_F8ielx49129sacc",
    "name": "ref_Fhz6lx4a393vc9c",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "input",
    "validate": [
      {
        "type": "email",
        "trigger": "change",
        "validator": "",
        "mode": "min",
        "message": "请输入正确的邮箱地址"
      }
    ]
  },
  {
    "type": "input",
    "field": "textarea",
    "title": "多行输入框",
    "info": "",
    "$required": true,
    "props": {
      "type": "textarea",
      "placeholder": "校验字符串"
    },
    "_fc_id": "id_Fce8lx4913n3afc",
    "name": "ref_Fcptlx4913n3agc",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "textarea",
    "validate": [
      {
        "type": "validator",
        "trigger": "blur",
        "validator": validator1,
        "mode": "min",
        "message": "请输入正确的多行输入框"
      }
    ]
  },
  {
    "type": "input",
    "field": "password",
    "title": "密码输入框",
    "info": "",
    "props": {
      "type": "password"
    },
    "_fc_id": "id_Fhlclx4914j4aic",
    "name": "ref_Febjlx4914j4ajc",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "password",
    "validate": [
      {
        "type": "string",
        "trigger": "change",
        "validator": "",
        "mode": "min",
        "message": ""
      }
    ],
    "$required": true
  },
  {
    "type": "inputNumber",
    "field": "num",
    "title": "计数器",
    "info": "",
    "$required": true,
    "props": {
      "controls": true
    },
    "_fc_id": "id_F3bvlx4915jialc",
    "name": "ref_F912lx4915jiamc",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "inputNumber",
    "validate": [
      {
        "type": "number",
        "trigger": "change",
        "validator": "",
        "mode": "min",
        "message": ""
      }
    ]
  },
  {
    "type": "radio",
    "field": "radio",
    "title": "单选框",
    "info": "",
    "effect": {
      "fetch": ""
    },
    "$required": false,
    "options": [
      {
        "label": "选项00",
        "value": 2
      },
      {
        "label": "选项01",
        "value": 3
      },
      {
        "label": "选项02",
        "value": 4
      }
    ],
    "_fc_id": "id_F678lx4916gcaoc",
    "name": "ref_Fxnplx4916gcapc",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "radio"
  },
  {
    "type": "checkbox",
    "field": "checkbox",
    "title": "多选框",
    "info": "",
    "effect": {
      "fetch": ""
    },
    "$required": false,
    "options": [
      {
        "label": "选项00",
        "value": 2
      },
      {
        "label": "选项01",
        "value": 3
      },
      {
        "label": "选项02",
        "value": 4
      }
    ],
    "_fc_id": "id_F301lx4917piarc",
    "name": "ref_Fzzalx4917piasc",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "checkbox"
  },
  {
    "type": "select",
    "field": "select",
    "title": "选择器",
    "info": "",
    "effect": {
      "fetch": ""
    },
    "$required": false,
    "options": [
      {
        "label": "选项00",
        "value": 2
      },
      {
        "label": "选项01",
        "value": 3
      },
      {
        "label": "选项02",
        "value": 4
      }
    ],
    "_fc_id": "id_F3golx49191zauc",
    "name": "ref_F6ytlx49191zavc",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "select"
  },
  {
    "type": "switch",
    "field": "switch",
    "title": "开关",
    "info": "",
    "$required": false,
    "_fc_id": "id_F2cklx491a5vaxc",
    "name": "ref_Fpgrlx491a5vayc",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "switch"
  },
  {
    "type": "rate",
    "field": "rate",
    "title": "评分",
    "info": "",
    "$required": false,
    "_fc_id": "id_Fhx7lx491bazb0c",
    "name": "ref_F9rblx491bazb1c",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "rate",
    "value": 0
  },
  {
    "type": "timePicker",
    "field": "timePicker",
    "title": "时间",
    "info": "",
    "$required": false,
    "_fc_id": "id_Fxiblx491ch3b3c",
    "name": "ref_F2uxlx491ch3b4c",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "timePicker"
  },
  {
    "type": "timePicker",
    "field": "timePickerScope",
    "title": "时间区间",
    "info": "",
    "$required": false,
    "props": {
      "isRange": true
    },
    "_fc_id": "id_Fdm6lx491ddqb6c",
    "name": "ref_Fxwolx491ddqb7c",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "timeRange"
  },
  {
    "type": "slider",
    "field": "slider",
    "title": "滑块",
    "info": "",
    "$required": false,
    "_fc_id": "id_Farxlx491ee6b9c",
    "name": "ref_Fm45lx491ee6bac",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "slider"
  },
  {
    "type": "datePicker",
    "field": "datePicker",
    "title": "日期",
    "info": "",
    "$required": false,
    "_fc_id": "id_Fqxhlx491fo1bcc",
    "name": "ref_F58glx491fo1bdc",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "datePicker"
  },
  {
    "type": "datePicker",
    "field": "datePickerScope",
    "title": "日期区间",
    "info": "",
    "$required": false,
    "props": {
      "type": "datetimerange"
    },
    "_fc_id": "id_Feuelx491gpbbfc",
    "name": "ref_Fqvrlx491gpbbgc",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "dateRange"
  },
  {
    "type": "colorPicker",
    "field": "color",
    "title": "颜色选择器",
    "info": "",
    "$required": true,
    "props": {
      "colorFormat": "rgb"
    },
    "_fc_id": "id_Fvu9lx491hrvbic",
    "name": "ref_Fdkolx491hrvbjc",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "colorPicker",
    "validate": [
      {
        "type": "string",
        "trigger": "change",
        "validator": "",
        "mode": "min",
        "message": ""
      }
    ]
  },
  {
    "type": "cascader",
    "field": "cascader",
    "title": "级联选择器",
    "info": "",
    "effect": {
      "fetch": ""
    },
    "$required": false,
    "props": {
      "options": [
        {
          "label": "选项200",
          "value": 2,
          "children": [
            {
              "label": "选项100",
              "value": 3,
              "children": [
                {
                  "label": "选项00",
                  "value": 4
                },
                {
                  "label": "选项01",
                  "value": 5
                },
                {
                  "label": "选项02",
                  "value": 6
                }
              ]
            },
            {
              "label": "选项101",
              "value": 7,
              "children": [
                {
                  "label": "选项00",
                  "value": 8
                },
                {
                  "label": "选项01",
                  "value": 9
                },
                {
                  "label": "选项02",
                  "value": 10
                }
              ]
            },
            {
              "label": "选项102",
              "value": 11,
              "children": [
                {
                  "label": "选项00",
                  "value": 12
                },
                {
                  "label": "选项01",
                  "value": 13
                },
                {
                  "label": "选项02",
                  "value": 14
                }
              ]
            }
          ]
        },
        {
          "label": "选项201",
          "value": 15,
          "children": [
            {
              "label": "选项100",
              "value": 16,
              "children": [
                {
                  "label": "选项00",
                  "value": 17
                },
                {
                  "label": "选项01",
                  "value": 18
                },
                {
                  "label": "选项02",
                  "value": 19
                }
              ]
            },
            {
              "label": "选项101",
              "value": 20,
              "children": [
                {
                  "label": "选项00",
                  "value": 21
                },
                {
                  "label": "选项01",
                  "value": 22
                },
                {
                  "label": "选项02",
                  "value": 23
                }
              ]
            },
            {
              "label": "选项102",
              "value": 24,
              "children": [
                {
                  "label": "选项00",
                  "value": 25
                },
                {
                  "label": "选项01",
                  "value": 26
                },
                {
                  "label": "选项02",
                  "value": 27
                }
              ]
            }
          ]
        },
        {
          "label": "选项202",
          "value": 28,
          "children": [
            {
              "label": "选项100",
              "value": 29,
              "children": [
                {
                  "label": "选项00",
                  "value": 30
                },
                {
                  "label": "选项01",
                  "value": 31
                },
                {
                  "label": "选项02",
                  "value": 32
                }
              ]
            },
            {
              "label": "选项101",
              "value": 33,
              "children": [
                {
                  "label": "选项00",
                  "value": 34
                },
                {
                  "label": "选项01",
                  "value": 35
                },
                {
                  "label": "选项02",
                  "value": 36
                }
              ]
            },
            {
              "label": "选项102",
              "value": 37,
              "children": [
                {
                  "label": "选项00",
                  "value": 38
                },
                {
                  "label": "选项01",
                  "value": 39
                },
                {
                  "label": "选项02",
                  "value": 40
                }
              ]
            }
          ]
        }
      ],
      "props": {
        "multiple": true,
        "emitPath": true,
        "value": "value",
        "label": "label",
        "children": "children",
        "disabled": "disabled"
      },
      "filterable": true
    },
    "_fc_id": "id_Fnorlx491jasblc",
    "name": "ref_Fwfrlx491jasbmc",
    "display": true,
    "hidden": false,
    "_fc_drag_tag": "cascader"
  }
])
const options = ref({
  onSubmit: (formData) => {
    console.log("🚀 ~ formData:", formData)
  },
  "resetBtn": {
    "show": true,
    "innerText": "重置22"
  },
  "submitBtn": {
    "show": true,
    "innerText": "提交11"
  },
  "form": {
    "labelPlacement": "left",
  },
})
</script>

<template>
  <form-create
    :rule="rule"
    v-model:api="fApi"
    :option="options"
  />
</template>