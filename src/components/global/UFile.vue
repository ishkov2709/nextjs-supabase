<script setup>
import {
  computed,
  defineProps,
  defineEmits,
  ref,
  watch
} from 'vue'

const emits = defineEmits(['update:model-value'])

const { modelValue } = defineProps({
  modelValue: String,
  label: String
})

const value = ref(modelValue)

const uploadFile = (e) => {
  const [file] = e.target.files
  value.value = file
}

const previewFilePath = computed(() => {
  if (value.value) {
    return URL.createObjectURL(value.value)
  }

  return null
})

watch(value, () => {
  emits('update:model-value', value.value)
})
</script>

<template>
  <div class="mb-3">
    <label for="formFile" class="form-label">
      {{ label }}
    </label>
    <input
      class="form-control"
      type="file"
      id="formFile"
      @change="uploadFile"
    />

    <img :src="previewFilePath" alt="" />
  </div>
</template>
