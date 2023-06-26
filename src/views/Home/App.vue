<template>
  <div class="home">
    <div class="home__wrapper">
      <create-button :handleOpen="handleOpen" />

      <list />

      <create-modal :isOpen="isOpen" :handleClose="handleClose" />
    </div>
  </div>
</template>

<script>
import AppButton from '@/ui/AppButton.vue'
import AppModal from '@/ui/AppModal.vue'
import CreateModal from './components/CreateModal/App.vue'
import CreateButton from './components/CreateButton.vue'
import List from './components/Table/App.vue'
import { getLocalStorage, USERS_KEY } from '@/utils'

export default {
  name: 'Home',
  components: { AppButton, AppModal, CreateModal, List, CreateButton },
  data() {
    return {
      users: [],
      isOpen: false,
    }
  },
  provide() {
    return {
      users: this.users,
    }
  },
  mounted() {
    const users = getLocalStorage(USERS_KEY)

    if (!users) return
    this.users.push(...users)
  },
  methods: {
    handleClose() {
      this.isOpen = false
    },
    handleOpen() {
      this.isOpen = true
    },
  },
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: var(--home-width);
  height: 100vh;
}

.home__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: var(--home-height);
}
</style>
