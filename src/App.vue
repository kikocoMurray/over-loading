<template lang="pug">
.body
  infinite-scrolling(:data="data" @loading="getGitHubData" :lock="lock")
</template>
<script>
import InfiniteScrolling from '@/components/infinite-scrolling/index.vue'
import {
  getGitHubData as getGitHubDataServices
} from '@/services/GithubServices.js'

import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'page',
  components: {
    InfiniteScrolling,
  },
  setup() {
    const data = ref([])
    const lock = ref(false)
    const page = ref(0)

    // 這邊要做虛擬渲染
    const getGitHubData = ()=>{
      page.value = page.value + 1

      getGitHubDataServices({page:page.value})
        .then((res)=>{
          // 代表資料以無法在 loading
          lock.value = res.length === 0

          data.value = [
            ...data.value,
            ...res
          ]
        })
    }

    return {
      data,
      lock,
      getGitHubData
    }
  },
})
</script>


<style lang="scss" scoped>
@import '~/scss/share.scss';

.body {
  flex: 1;
  background: $bg;
  padding: to-rem(30px);
}
</style>
