<script setup lang="ts">
  const props = withDefaults(defineProps < {
    modelValue: boolean,
    title: string,
    titleModifiers ? : {
      [key: string]: boolean
    }
  } > (), {
    modelValue: false,
    title: '暂无'
  });

  console.log(props)
  const emit = defineEmits < {
    (e: 'update:modelValue', updateValue: boolean): void,
    (e: 'update:title', updateValue: string): void
  } > ()


  const handleCheckChange = () => {
    emit('update:modelValue', !props.modelValue)

  }

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    let value: string;
    if (props.titleModifiers && props.titleModifiers.trim) {
      value = target.value.trim()
    } else {
      value = target.value
    }
    console.log(value)
    emit('update:title', value)
  }
</script>

<template>
  <div class="check-editor">
    <div class="check-editor-inner">
      <div class="checkbox" :class="{ checked : modelValue }" @click="handleCheckChange"></div>
      <input type="text" class="editor" :value="title" @input="handleInputChange" />
    </div>
  </div>
</template>

<style scoped>
  .check-editor {
    cursor: pointer;
  }

  .check-editor-inner {
    display: flex;
    align-items: center;
  }

  .checkbox {
    width: 15px;
    height: 15px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    border-radius: 3px;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkbox:hover,
  .checkbox.checked {
    border-color: #409eff;
  }

  .checkbox.checked::after {
    content: "";
    border-radius: 2px;
    width: 9px;
    height: 9px;
    background: #409eff;
  }

  .editor {
    border: none;
    outline: none;
    margin-left: 5px;
    border-bottom: 1px solid #dcdfe6;
    font-size: inherit;
  }
</style>