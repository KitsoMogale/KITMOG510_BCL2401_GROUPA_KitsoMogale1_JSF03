import { defineStore } from "pinia";


export const mainStore = defineStore('mainstore',{
     state: ()=>({

        products: [],
        originalProducts: [],
        loading: false,
        error: false,
        sorting: "default",
        searchTerm: "",
        filterItem: "All categories",

     }),
    
    })