<script setup>
import { ref, computed } from 'vue'

const products = ref([
  'Apple',
  'Bananas',
  'Bread',
  'Carrot',
  'Ceral',
  'Peach',
  'Piapple'
])

// const users = ref([
//   { id: 1, name: 'Jack', age: 51 },
//   { id: 2, name: 'Daniel', age: 33 },
//   { id: 3, name: 'Jarred', age: 45 }
// ])

const query = ref('')

const queryProducts = computed(() => {
  return products.value.filter(
    (product) =>
      product.indexOf(query.value) !== -1
  )
})
</script>

<template>
  <div>
    <input
      type="search"
      placeholder="Search products"
      v-model="query"
    />
  </div>

  <p>{{ query }}</p>
  <br />
  <ul>
    <li
      v-for="product in queryProducts"
      :key="product"
    >
      {{ product }}
    </li>
  </ul>
</template>

<style></style>
