<template lang="pug">
.body
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
    const fake = ref([
      {title: 'advert_adioun',description:'使用 AAA 完成 BBB',url:'https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working'},
      {title: 'advert_adioun',description:'使用 AAA 完成 BBB',url:'https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working'},
      {title: 'advert_adioun',description:'使用 AAA 完成 BBB',url:'https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working'},
      {title: 'advert_adioun',description:'使用 AAA 完成 BBB',url:'https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working'},
      {title: 'advert_adioun',description:'使用 AAA 完成 BBB',url:'https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working'},
      {title: 'advert_adioun',description:'使用 AAA 完成 BBB',url:'https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working'},
    ])

    // 這邊要做虛擬渲染
    const getGitHubData = ()=>{
      console.log('insert data')
      data.value = [
        ...data.value,
        ...fake.value,
      ]
    }

    // getGitHubData()

    return {
      data,
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
