<template >

   <div v-if="error" class="flex justify-center">
     <div class="mt-28 text-red-500 text-xl font-bold">Data fetching failed, please check your network connection</div>
    </div>

       <div class="flex justify-center">
       <ProductSkeleton v-if='loading && !error' />  
       <ProductDetail v-if='!loading && !error' :product='product' />
      
    </div>

</template>


<script setup>
   import ProductSkeleton from '../products/ProductSkeleton.vue'
   import ProductDetail from '../products/ProductDetail.vue'
   import { fetchSingleProduct } from "../../api.js";
   import {ref} from 'vue'

   const loading = ref(false);
   const error = ref(null);
   const product = ref(null);
   const id = ref($route.params.id);

   const fetchData = async () => {
      loading = true;
      const { response, error1 } = await fetchSingleProduct(id);
      if (error1) {
       error = error1;
      }
      setProduct(response);
      loading = false;
    };

    fetchData();
</script>