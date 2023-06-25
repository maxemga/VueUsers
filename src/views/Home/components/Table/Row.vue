<template>
  <div>
    <div class="row" :class="{ row__title: isTitle }" @click="$emit('click')">
      <div class="row-item">
        <icon
          :hasChilds="hasChilds"
          :handleVisible="handleVisible"
          :isOpen="isOpen"
        />

        {{ user.name }}
      </div>

      <div class="row-item">{{ user.phone }}</div>
    </div>

    <row
      v-if="isOpen"
      v-for="child of user.childs"
      :key="child.id"
      :user="child"
      :hasChilds="child.childs.length"
    />
  </div>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'Row',
  components: { Icon },
  data() {
    return {
      isOpen: false,
    }
  },
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
  methods: {
    handleVisible() {
      this.isOpen = !this.isOpen
    },
  },
  emits: ['click'],
}
</script>

<style scope>
.row {
  display: flex;
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
