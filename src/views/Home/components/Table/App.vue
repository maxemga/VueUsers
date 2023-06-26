<template>
  <div class="table">
    <table-header />
    <div class="table__content">
      <row
        :user="{ name: 'Имя', phone: 'Телефон' }"
        :hasChilds="false"
        :isTitle="true"
        @click="handleSort"
      />
      <row
        v-for="user of sortedUsers"
        :key="user.id"
        :user="user"
        :hasChilds="user.childs.length"
      />
      <app-empty v-if="isUsersEmpty" />
    </div>
  </div>
</template>

<script>
import AppEmpty from '@/ui/AppEmpty.vue'
import TableHeader from './Header.vue'
import Row from './Row.vue'
import { sortByName, addLevelToUsers } from '@/utils'

export default {
  components: { TableHeader, Row, AppEmpty },
  name: 'Table',
  inject: ['users'],
  data() {
    return {
      isSort: false,
      sortedArr: [],
    }
  },
  computed: {
    sortedUsers() {
      return this.isSort ? this.sortedArr : addLevelToUsers(this.users)
    },
    isUsersEmpty() {
      return this.users.length === 0
    },
  },
  methods: {
    handleSort() {
      if (!this.isSort) {
        this.isSort = true
        this.sortedArr = sortByName([...this.users])
        return
      }

      this.isSort = false
    },
  },
}
</script>

<style scoped>
.table {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 10px;
  width: 100%;
  height: calc(100% - 50px);
}

.table__content {
  overflow: auto;
  padding: 36px;
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 16px;
}

.table__content::-webkit-scrollbar {
  width: 8px;
  height: 4px;
  border-radius: 15px;
  background-color: transparent;
}

.table__content::-webkit-scrollbar-thumb {
  background-color: var(--silver);
  border-radius: 8px;
}
</style>
