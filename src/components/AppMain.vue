<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
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
      <ul class="list">
         <li v-for="movie in store.movies">
            <AppCard :info="movie" />
         </li>
      </ul>
      <!-- /lista film-->
      <hr class="border-2" />
      <!-- lista shows -->
      <ul class="list">
         <li v-for="show in store.shows">
            <AppCard :info="show" />
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
      width: calc(100% / 2);
      padding: 10px;
      @media (width > 576px) {
         width: calc(100% / 3);
      }
      @media (width > 992px) {
         width: calc(100% / 4);
      }
      @media (width > 1200px) {
         width: calc(100% / 5);
      }
   }
}
</style>
