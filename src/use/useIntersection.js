import { computed, onUnmounted, ref, watch } from "vue"
/**
 *
 * @param {root} 指定與元素交接的窗口
 * @param {rootMargin} 調整指定窗口縮放
 * @param {threshold} 交接範圍百分比 可以是 [0,0.5,1]
 * @returns
 */
export const useIntersection = ({root,rootMargin,threshold}) => {
  const observer = ref(null)
  const team = ref({})
  const assign = (el) => {
    team.value[el] = false

    observer.value.observe(el)
  }

  const isTouch = computed(() => {
    return Object.values(team.value).some(node => node)
  })

  watch(
    () => root.value,
    (dom) => {
      if(!dom) return

      observer.value = new IntersectionObserver((entries)=>{
        // 隨時更新監聽狀態
        entries.map(entry => {
          team.value[entry.target] = entry.isIntersecting
        })
      },{ root: dom, rootMargin, threshold })
    }
  )

  onUnmounted(() => {
    observer.value.disconnect()
  })

  return {
    assign,
    isTouch,
  }
}