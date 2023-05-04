<template lang="pug">
template
  infinite-scrolling(:data="data" @loading="getGitHubData")
</template>
<script>
import InfiniteScrolling from '@/components/infinite-scrolling/index.vue'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'page',
  components: {
    InfiniteScrolling,
  },
  setup() {
    const data = ref([])
    const getGitHubData = ()=>{
      console.log('Infinite')
    }

    getGitHubData()

    return {
      data,
      getGitHubData
    }
  },
})
</script>


<style scoped>
</style>
