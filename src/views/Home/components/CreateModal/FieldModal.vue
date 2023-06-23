<template>
  <app-input
    v-if="item.type === input"
    :placeholder="item.placeholder"
    :value="item.value"
    :label="item.label"
    v-model="item.value"
  />
  <app-select
    v-else
    :value="item.value"
    :label="item.label"
    v-model="item.value"
  >
    <option :value="null">Нет начальника</option>
    <option v-for="user of users" :key="user.id" :value="user.id">{{
      user.name
    }}</option>
  </app-select>
</template>

<script>
import AppInput from '@/ui/AppInput.vue'
import AppSelect from '@/ui/AppSelect.vue'

export default {
  name: 'FieldModal',
  components: { AppInput, AppSelect },
  inject: ['users'],
  props: {
    item: {
      value: {
        required: true,
      },
      placeholder: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'input',
      },
    },
  },
}
</script>

<style scoped></style>
