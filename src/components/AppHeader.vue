<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
   data() {
      return {
         store,
      };
   },
   methods: {
      storeMoviesApi() {
         axios
            .get('https://api.themoviedb.org/3/search/movie?', {
               params: {
                  api_key: this.store.apiKey,
                  language: 'it-IT',
                  query: this.store.searchText,
               },
            })
            .catch(() => {
               console.log('problema api axios di search()');
            })
            .then((response) => {
               // console.log(response.data.results);
               this.store.movies = response.data.results;
            });
      },
      storeShowsApi() {
         axios
            .get('https://api.themoviedb.org/3/search/tv?', {
               params: {
                  api_key: this.store.apiKey,
                  language: 'it-IT',
                  query: this.store.searchText,
               },
            })
            .catch(() => {
               console.log('problema api axios di search()');
            })
            .then((response) => {
               console.log(response.data.results);
               this.store.shows = response.data.results;
            });
      },
      search() {
         console.log(store.searchText);
         // SOLO I FILM
         this.storeMoviesApi();
         //SOLO LE SERIE TV
         this.storeShowsApi();
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
