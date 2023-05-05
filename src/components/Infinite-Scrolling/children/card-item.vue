<template lang="pug">
.item__wrap(ref="wrap")
  .item__wrap__title  {{ title }}
  .item__wrap__description {{ description }}
  .item__wrap__url {{ url }}
</template>
<script>
import { defineComponent, ref, watch } from 'vue'

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
  emits:['build'],
  setup(_,{emit}) {
    const wrap = ref(null)

    watch(
      ()=>wrap.value,
      (dom) =>{
        if(!dom) return

        emit('build', dom.clientHeight + 16)
      }
    )

    return {
      wrap
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~/scss/share.scss';

.item__wrap {
  background: white;
  padding: to-rem(15px) to-rem(16px);
  border-radius: to-rem(8px);
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));

  &__title {
    font-weight: bold;
    margin-bottom: to-rem(8px);
  }

  &__description {
    margin-bottom: to-rem(4px);
  }

  &:not(&:last-child) {
    margin-bottom: to-rem(16px);
  }
}
</style>
