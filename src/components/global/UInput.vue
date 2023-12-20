<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'

const emits = defineEmits(['update:model-value'])

const { modelValue } = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    defaulf: 'text',
    validator: (val) =>
      [
        'text',
        'textarea',
        'password',
        'email',
        'tel',
        'search'
      ].includes(val)
  }
})

const value = ref(modelValue)

watch(value, () => {
  emits('update:model-value', value)
})
</script>

<template>
  <input
    v-if="type !== 'textarea'"
    :type="type"
    class="form-control mb-4"
    :placeholder="placeholder"
    v-model="value"
  />

  <textarea
    v-else
    class="form-control mb-3"
    rows="3"
    :placeholder="placeholder"
    v-model="value"
  ></textarea>
</template>
