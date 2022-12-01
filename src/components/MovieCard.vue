<script>
export default {
   props: {
      info: Object,
   },
   computed: {
      starNum() {
         return Math.ceil(this.info.vote_average / 2);
      },
   },
};
</script>
<template>
   <div class="movie h-100">
      <h2>{{ info.title }}</h2>
      <h6>{{ info.original_title }}</h6>
      <font-awesome-icon v-for="n in starNum" icon="fa-solid fa-star" />
      <font-awesome-icon v-for="n in 5 - starNum" icon="fa-regular fa-star" />
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
