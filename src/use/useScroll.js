import { nextTick, onMounted, onUnmounted } from "vue"

export const useScroll = ({root,func}) => {
  onMounted(() => {
    nextTick(()=>{
      root.value.addEventListener('scroll',func,true)
    })
  })

  onUnmounted(()=>{
    root.value.removeEventListener('scroll',func)
  })

}