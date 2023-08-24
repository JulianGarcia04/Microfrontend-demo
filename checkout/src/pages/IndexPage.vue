<template>
  <q-page class="row items-center justify-evenly">
    <span class="text-h1">
      {{ saludar }}
    </span>
    <my-page/>
  </q-page>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';

const saludar = ref('hola mundo de quasar v2')

const MyPage = defineAsyncComponent(() =>(
  import('dashboard/HomePage.vue')
))
</script>
