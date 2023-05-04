<template lang="pug">
section
  template(v-for="node in data")
    card-item(:node="node")
</template>
<script>
import { defineComponent } from 'vue'
import CardItem from '@/components/infinite-scrolling/children/card-item.vue'

export default defineComponent({
  name: 'infinite-scrolling',
  components: {
    CardItem,
  },
  props: {
    data: {
      type: Array,
      default: ()=>[]
    },
  },
  emit: ['loading'],

  setup() {},
})
</script>
