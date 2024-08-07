
<template>
  <Header></Header>
  <div class="grid lg:flex gap-y-4 gap-x-48 lg:items-start  mt-3 mx-auto justify-center">
        <Filter />
        <Sort />
      </div>
      <ProductList/>

</template>

<script >

import Header  from "./components/Header.vue";
import Filter from "./components/Filter.vue"
import Sort from "./components/Sort.vue"
import ProductList from "./components/products/ProductList.vue"

export default {
  name: 'App',

  components:{
    Header,
    Filter,
    Sort,
    ProductList
  }

}

</script>


