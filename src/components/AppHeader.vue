<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
   data() {
      return {
         store,
         // api key
         apiKey: 'dd6e3a1cbd4f4b17c20f78ce83edad8c',
      };
   },
   methods: {
      search() {
         console.log(store.searchText);
         // SOLO I FILM
         axios
            .get('https://api.themoviedb.org/3/search/movie?', {
               params: {
                  api_key: this.apiKey,
                  language: 'it-IT',
                  query: this.store.searchText,
               },
            })
            .catch(() => {
               console.log('problema api axios di search()');
            })
            .then((response) => {
               console.log(response.data.results);
               this.store.movies = response.data.results;
            });
      },
   },
};
</script>

<template>
   <header>
      <h1>Boolflix</h1>
      <form action="" @submit.prevent="search">
         <input type="text" v-model="store.searchText" required />
         <button type="submit">cerca</button>
      </form>
   </header>
</template>

<style lang="scss" scoped></style>
