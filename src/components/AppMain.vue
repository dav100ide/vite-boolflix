<script>
import AppCard from './AppCard.vue';
import { store } from '../store';
export default {
   components: {
      AppCard,
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
      <ul class="movies-list">
         <li v-for="movie in store.movies">
            <AppCard :info="movie" />
         </li>
      </ul>
      <!-- /lista film-->
   </main>
</template>

<style lang="scss" scoped>
.movies-list {
   display: flex;
   flex-wrap: wrap;
   color: rgb(9, 9, 87);
   list-style: none;
   li {
      width: calc(100% / 3);
      padding: 10px;
   }
}
</style>
