<template>
   <section>
      <!-- lista shows-->
      <ul class="list">
         <li v-for="show in store.shows">
            <AppCard :info="show" />
         </li>
      </ul>
      <!-- /lista shows-->
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
