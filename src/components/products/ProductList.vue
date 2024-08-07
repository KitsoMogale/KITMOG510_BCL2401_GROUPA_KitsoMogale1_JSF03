<template >

<div v-if="mainstore.loading && !mainstore.error" class="grid justify-center">
        <div class="lg:max-h-[130rem] max-w-xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center lg:max-w-none my-4">
          
            <template v-for="item in new Array(20).fill(null)" >
              <CardSkeleton  />
            </template>
        
        </div>
      </div>

<div v-if="mainstore.error" class="grid justify-center">
    <div class="mt-28 text-red-500 text-xl font-bold">Data fetching failed, please check your network connection</div>
      </div>

      <div class="grid justify-center">
        <div class="lg:max-h-[130rem] max-w-xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center lg:max-w-none my-4">
        
        <ProductCard v-for="product in mainstore.products" key="product.id" :product='product' />;
   
    </div>
</div>
</template>


<script setup>
  import ProductCard from './ProductCard.vue'
  import CardSkeleton from './CardSkeleton.vue'
  import {mainStore} from '../../store.js'

  const mainstore = mainStore();
  mainstore.fetchProducts();


</script>