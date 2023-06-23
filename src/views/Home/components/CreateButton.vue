<template>
  <div class="button">
    <app-button title="Создать пользователя" @click="handleOpen" />
  </div>
</template>

<script>
import AppButton from '@/ui/AppButton.vue'

export default {
  components: { AppButton },
  name: 'ButtonCreate',
  props: {
    handleOpen: {
      required: true,
    },
  },
}
</script>

<style scoped>
.button {
  width: 50%;
  margin-left: auto;
  height: var(--create-button-height);
}
</style>
