<template>
  <transition name="fade">
    <div class="popup" v-if="isOpen">
      <div class="popup__background" @click="$emit('click')" />

      <div class="popup__content">
        <div class="content__title">
          <h2>{{ title }}</h2>

          <div class="content__close" @click="$emit('click')">
            <cross-icon />
          </div>
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import CrossIcon from '@/assets/icons/CrossIcon.vue'
import AppInput from './AppInput.vue'

export default {
  components: { CrossIcon, AppInput },
  name: 'AppModal',
  data() {
    return {
      value: '',
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    isOpen: {
      default: false,
    },
  },
  methods: {
    log() {
      console.log('32113')
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.code == 'Escape') {
        this.$emit('click')
      }
    })
  },
  emits: ['click'],
}
</script>

<style scoped>
.popup__background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.popup__content {
  padding: 30px;
  background: var(--white);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--modal-width);
  border-radius: 20px;
}

.content__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.content__close {
  cursor: pointer;
}
.btn {
  margin-bottom: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
