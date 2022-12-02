<template>
   <section>
      <!-- lista film-->
      <ul class="list">
         <li v-for="movie in store.movies">
            <AppCard :info="movie" />
         </li>
      </ul>
      <!-- /lista film-->
   </section>
</template>

<script>
import { store } from '../../store';
import AppCard from '../AppCard.vue';

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

<style lang="scss" scoped></style>
