<script>
import CountryFlag from 'vue-country-flag-next';

export default {
   props: {
      info: Object,
   },
   components: {
      CountryFlag,
   },
   methods: {
      getFlag(lang) {
         if (lang === 'en') {
            lang = 'gb';
         } else if (lang === 'ko') {
            lang = 'kr';
         } else if (lang === 'zh') {
            lang = 'cn';
         } else if (lang === 'ja') {
            lang = 'jp';
         }
         return lang;
      },
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
      <img :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`" :alt="info.title" class="img-fluid" />
      <div><country-flag :country="getFlag(info.original_language)" /></div>
   </div>
</template>

<style lang="scss" scoped>
.movie {
   background-color: #ddd;
   border: 1px solid black;
   padding: 0.5rem;
}
</style>
