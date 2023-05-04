<template lang="pug">
section
  .title  {{ title }}
  .description {{ description }}
  .url {{ url }}
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'card-item',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    }
  },

  setup() {},
})
</script>
