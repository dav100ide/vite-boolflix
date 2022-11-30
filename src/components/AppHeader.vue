<script>
import { store } from '../store.js';
export default {
   data() {
      return {
         store,
      };
   },
   methods: {
      search() {
         console.log(store.searchText);
      },
   },
};
</script>

<template>
   <header>
      <h1>Boolflix</h1>
      <form action="" @submit.prevent="search">
         <input type="text" v-model="store.searchText" />
         <button type="submit">cerca</button>
      </form>
   </header>
</template>

<style lang="scss" scoped></style>
