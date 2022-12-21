import {defineStore} from 'pinia'

export const useCarStore = defineStore("car-store",{
  state:() => ({
    carList:[
      {
        name:"name1",
        num:1,
        price:100
      },
      {
        name:"name2",
        num:2,
        price:200
      },
      {
        name:"name3",
        num:3,
        price:300
      }
    ]
  })
})