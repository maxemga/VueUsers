<template>
  <div class="row" :class="{ row__title: isTitle }" @click="$emit('click')">
    <div class="row-item">
      <div class="row-icon" v-if="hasChilds">
        <plus-icon />
      </div>
      {{ user.name }}
    </div>
    <div class="row-item">{{ user.phone }}</div>
  </div>
</template>

<script>
import PlusIcon from '@/assets/icons/PlusIcon.vue'

export default {
  components: { PlusIcon },
  name: 'Row',
  props: {
    user: {
      id: {
        type: Number,
      },
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      childs: {
        type: Array,
      },
    },
    hasChilds: {
      required: true,
    },
    isTitle: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
}
</script>

<style scope>
.row {
  display: flex;
}

.row-icon {
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.row__title {
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
}

.row-item {
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--silver);
  padding-left: 24px;
  width: 50%;
  height: 50px;
}

.row-item:nth-child(2) {
  border-left: 2px solid var(--silver);
}
</style>
