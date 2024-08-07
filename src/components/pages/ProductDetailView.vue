<template >

<div class="flex justify-center">
       
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

   const fetchData = async () => {
      loading = true;
      const { response, error } = await fetchSingleProduct(id);
      if (error) {
        setError(error);
      }
      setProduct(response);
      loading = false;
    };

    fetchData();
</script>