import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: '周星星'
    }
  },
  actions: {
    getUser() {
      console.log('get user')
    }
  }
})