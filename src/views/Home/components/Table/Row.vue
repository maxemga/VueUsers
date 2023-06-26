<template>
  <div>
    <div class="row" :class="{ row__title: isTitle }" @click="$emit('click')">
      <div
        class="row-item"
        :style="{
          left: `${user.level * 20}px`,
          cursor: hasChilds ? 'pointer' : 'auto',
        }"
        @click="handleSort"
      >
        <icon
          v-if="hasChilds"
          :handleVisible="handleVisible"
          :isOpen="isOpen"
        />

        {{ user.name }}
      </div>

      <div class="row-item">
        {{ user.phone }}
      </div>
    </div>

    <row
      v-if="isOpen"
      v-for="child of sortedUsers"
      :key="child.id"
      :user="child"
      :hasChilds="child.childs.length"
    />
  </div>
</template>

<script>
import Icon from './Icon.vue'
import { sortByName } from '@/utils'

export default {
  name: 'Row',
  components: { Icon },
  data() {
    return {
      isOpen: false,
      isSort: false,
    }
  },
  methods: {
    handleSort() {
      if (!this.hasChilds) return
      this.isSort = !this.isSort
    },
    handleVisible() {
      this.isOpen = !this.isOpen
    },
  },
  computed: {
    sortedUsers() {
      return this.isSort ? sortByName([...this.user.childs]) : this.user.childs
    },
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
