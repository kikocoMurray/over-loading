<template lang="pug">
h4 無限滾動開始
section(ref="container")
  template(v-for="node in data")
    card-item(:title="node.title" :description="node.description" :url="node.url")
  .loader(ref="touch")
    .loading--touch
</template>
<script>
import { defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { useIntersection } from '@/use/useIntersection.js'
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
  emits: ['loading'],
  setup(_,{ emit }) {
    const container = ref(null)
    const touch = ref(null)

    const observer = useIntersection({
      root: container,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0
    })

    watch(
      () => observer.isTouch.value,
      (bol) => {
        if(bol) emit('loading')
      },
    )

    onMounted(()=>{
      nextTick(()=>{
        observer.assign(touch.value)
      })
    })

    return {
      container,
      touch,
    }
  },
})
</script>
<style lang="scss" scoped>
@import '~/scss/share.scss';

section {
  height: to-rem(620px);
  overflow: scroll;
}

h4 {
  font-size: 2rem;
  margin-bottom: 40px;
}

.loader {
  position: relative;
  width: 100%;
  height: to-rem(70px);
  background: white;
}

.loading--touch {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
  transform: translate(-50%,-50%);
  animation: rotate 1s linear infinite
}
.loading--touch::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  border: 5px solid #FF3D00;
  animation: prixClipFix 2s linear infinite ;
}

@keyframes rotate {
  0%   {transform: rotate(0deg)}
  100%   {transform: rotate(360deg)}
}

@keyframes prixClipFix {
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
}
</style>
