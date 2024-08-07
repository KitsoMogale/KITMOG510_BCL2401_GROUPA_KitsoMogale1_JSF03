<template >


       <div class="flex justify-center">
      {loading && !error ? <ProductSkeleton /> : <ProductDetail {...product} />}
      ;
    </div>

</template>


<script setup>
   import ProductSkeleton from '../products/ProductDetails.vue'
   

</script>