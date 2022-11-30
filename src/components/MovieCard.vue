<script>
// import { store } from '../store';
export default {
   // data() {
   //    return {
   //       store,
   //    };
   // },
   props: {
      info: Object,
   },
};
</script>
<template>
   <div class="movie h-100">
      <h2>{{ info.title }}</h2>
      <h6>{{ info.original_title }}</h6>
      <div>{{ info.vote_average }}</div>
      <!-- <img src="" alt=""> bandiera che dice la lingua -->
      <p>{{ info.original_language }}</p>
   </div>
</template>

<style lang="scss" scoped>
.movie {
   border: 1px solid black;
   padding: 0.5rem;
}
</style>
