<template>
  <app-modal
    :isOpen="isOpen"
    @click="handleClose"
    title="Добавление пользователя"
  >
    <div class="fields">
      <field-modal v-for="item of values" :key="item.label" :item="item" />
    </div>
    <app-button title="Создать" @click="createUser" :isValid="isValid" />
  </app-modal>
</template>

<script>
import AppModal from '@/ui/AppModal.vue'
import AppButton from '@/ui/AppButton.vue'
import AppInput from '@/ui/AppInput.vue'
import AppSelect from '@/ui/AppSelect.vue'
import FieldModal from './FieldModal.vue'
import {
  saveLocalStorage,
  USERS_KEY,
  USER_FIELD_VALUES,
  findUserById,
} from '@/utils'

export default {
  name: 'CreateModal',
  components: { AppModal, AppButton, AppInput, FieldModal, AppSelect },
  inject: ['users'],
  data() {
    return {
      values: USER_FIELD_VALUES,
    }
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    handleClose: {
      required: true,
    },
  },
  methods: {
    createUser() {
      const nameValue = this.values[0].value
      const phoneValue = this.values[1].value
      const bossValue = this.values[2].value

      const user = {
        id: Math.random(),
        name: nameValue,
        phone: phoneValue,
        childs: [],
      }

      if (!bossValue) {
        this.users.push(user)
        saveLocalStorage(USERS_KEY, this.users)

        this.handleClose()
        this.resetFields()

        return
      }

      const boss = findUserById(this.users, Number(bossValue))
      boss.childs.push(user)
      saveLocalStorage(USERS_KEY, this.users)

      this.handleClose()
      this.resetFields()
    },
    resetFields() {
      this.values[0].value = ''
      this.values[1].value = ''
      this.values[2].value = null
    },
  },
  computed: {
    isValid() {
      if (!this.values[0].value.length || !this.values[1].value.length) {
        return false
      }

      return true
    },
  },
}
</script>

<style scoped>
.fields {
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  gap: 20px;
}
</style>
