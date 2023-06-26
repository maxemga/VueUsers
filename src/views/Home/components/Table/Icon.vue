<template>
  <div class="icon" @click="handleVisible">
    <minus-icon v-if="isOpen" />
    <plus-icon v-else />
  </div>
</template>

<script>
import PlusIcon from '@/assets/icons/PlusIcon.vue'
import MinusIcon from '@/assets/icons/MinusIcon.vue'

export default {
  name: 'TableIcon',
  components: { PlusIcon, MinusIcon },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    handleVisible: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style scoped>
.icon {
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
