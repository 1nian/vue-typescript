import { defineStore } from 'pinia'


export const useUsers = defineStore('users', {
  state : () => ({
      user:""
  }),


  actions:{
    login (data:any) {
      fetch('http://localhost:3000/user/login',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then(res => res.json()).then(res => {
        if (res.code === 200) {
            this.user = res.data.name
        }
      })
    }
  }
})