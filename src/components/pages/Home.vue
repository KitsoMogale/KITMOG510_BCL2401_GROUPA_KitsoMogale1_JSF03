<template >
     <div class="grid lg:flex gap-y-4 gap-x-48 lg:items-start  mt-3 mx-auto justify-center">
        <Filter />
        <Sort />
      </div>
      <ProductList/>
</template>


<script setup>
import Filter from "../Filter.vue"
import Sort from "../Sort.vue"
import ProductList from "../products/ProductList.vue"

</script>