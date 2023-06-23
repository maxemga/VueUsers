<template>
  <div class="select">
    <label :for="label">{{ label }}</label>
    <select :name="label" @input="updateValue($event.target.value)">
      <slot />
    </select>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',
  data() {
    return {}
  },
  props: {
    value: {
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style scoped>
.select select {
  outline: none;
  box-sizing: border-box;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid var(--violet-dark);
  width: 100%;
  transition: 0.3s ease;
  margin-top: 4px;
}

.select label {
  font-size: 16px;
}

/* .input__field-focus {
  border: 3px solid var(--violet-dark);
  transition: 0.1s ease;
} */
</style>
