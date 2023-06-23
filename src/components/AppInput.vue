<template>
  <div class="input">
    <label :for="label">{{ label }}</label>
    <input
      type="text"
      :class="{ 'input__field-focus': isFocus }"
      :value="value"
      :name="label"
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  data() {
    return {
      isFocus: false,
    }
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
      required: true,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
    handleFocus() {
      this.isFocus = true
    },
    handleBlur() {
      this.isFocus = false
    },
  },
}
</script>

<style scoped>
.input input {
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

.input label {
  font-size: 16px;
}

.input__field-focus {
  border: 3px solid var(--violet-dark);
  transition: 0.1s ease;
}
</style>
