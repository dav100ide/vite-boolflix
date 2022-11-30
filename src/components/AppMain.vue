<script>
import MovieCard from './MovieCard.vue';
import { store } from '../store';
import ShowCard from './ShowCard.vue';
export default {
   components: {
      MovieCard,
      ShowCard,
   },
   data() {
      return {
         store,
      };
   },
};
</script>

<template>
   <main>
      <!-- lista film-->
      <ul class="list movies-list">
         <li v-for="movie in store.movies">
            <MovieCard :info="movie" />
         </li>
      </ul>
      <!-- /lista film-->
      <hr class="border border-2 opacity-100" />
      <!-- lista shows -->
      <ul class="list shows-list">
         <li v-for="show in store.shows">
            <ShowCard :info="show" />
         </li>
      </ul>
      <!-- /lista shows -->
   </main>
</template>

<style lang="scss" scoped>
.list {
   display: flex;
   flex-wrap: wrap;
   padding: 0;
   list-style: none;
   li {
      width: calc(100% / 3);
      padding: 10px;
   }
}
.movies-list {
   color: darkred;
}

.shows-list {
   color: darkblue;
}
</style>
