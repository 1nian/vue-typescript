import { defineStore } from 'pinia'
import { axios } from "../api/axios";

export const useAsyncStore = defineStore('async-store', {
  state: () => ({
    list: [] as any[],
  }),

  actions:{
    async getList() {
      const res = await axios("/mock.json");
      this.list = res
    }
  }
})