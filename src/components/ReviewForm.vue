<script>
import { computed, reactive, defineComponent } from 'vue'
import axios from 'axios'
import UButton from './global/UButton.vue'

export default defineComponent({
  name: 'ReviewForm',

  components: {
    UButton
  },

  setup() {
    const review = reactive({
      author: '',
      stars: null,
      text: '',
      photo: null,
      isRecomended: true
    })

    const stars = [1, 2, 3, 4, 5]

    const submit = () => {
      console.log('submit')

      axios.post('api/review', review, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }

    return {
      review,
      stars,
      submit
    }
  }
})
</script>

<template>
  <form @submit.prevent.stop="submit">
    <UInput
      type="text"
      v-model="review.author"
      placeholder="Yout name"
    />
    <UInput
      type="textarea"
      v-model="review.text"
      placeholder="What you like"
    />
    <UCheckbox />
    <URadio />

    <b>Grade</b>
    <div
      v-for="star in stars"
      :key="star"
      class="form-check"
    >
      <input
        v-model="review.stars"
        class="form-check-input mb-3"
        type="checkbox"
        :true-value="star"
        :false-value="null"
        :id="`star${star}`"
      />
      <label class="form-check-label" :for="`star${star}`">
        {{ star }}
      </label>
    </div>

    <UFile v-model="review.photo" label="Photo" />

    <div class="form-check">
      <input
        v-model="review.isRecomended"
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="adv1"
        :value="true"
      />
      <label class="form-check-label" for="adv1">
        Recomend
      </label>
    </div>
    <div class="form-check">
      <input
        v-model="review.isRecomended"
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="adv2"
        :value="false"
      />
      <label class="form-check-label mb-3" for="adv2">
        Not recomend
      </label>
    </div>

    <UButton>Submit</UButton>
  </form>
</template>
