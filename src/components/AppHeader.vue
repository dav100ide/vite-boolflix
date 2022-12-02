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
      <div class="logo">
         <img src="../../assets/boolflix-logo.png" alt="logo" class="img-fluid" />
      </div>
      <form action="" @submit.prevent="search">
         <input type="text" v-model="store.searchText" placeholder="film o serie Tv" required />
         <button class="btn btn-dark" type="submit">CERCA</button>
      </form>
   </header>
</template>

<style lang="scss" scoped>
header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   .logo {
      width: 12rem;
   }
   input {
      padding: 0.5rem 0.8rem;
      border-radius: 0.5rem;
      &:focus {
         outline: 0;
      }
      &::placeholder {
         font-style: italic;
      }
   }
}
</style>
