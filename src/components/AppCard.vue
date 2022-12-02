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
      posterSrc() {
         const posterSrc = this.info.poster_path
            ? `https://image.tmdb.org/t/p/w342${this.info.poster_path}`
            : 'https://via.placeholder.com/350x500';
         return posterSrc;
      },
   },
};
</script>
<template>
   <div class="ms_card">
      <div class="ms_card__front w-100 h-100">
         <img :src="posterSrc" :alt="info.title" class="rounded-3 w-100" />
      </div>
      <div class="ms_card__back rounded-3">
         <h2>{{ info.title || info.name }}</h2>
         <h6>{{ info.original_title || info.original_name }}</h6>
         <div class="stars">
            <font-awesome-icon v-for="n in starNum" icon="fa-solid fa-star" />
            <font-awesome-icon v-for="n in 5 - starNum" icon="fa-regular fa-star" />
         </div>
         <country-flag :country="getFlag(info.original_language)" />
      </div>
   </div>
</template>

<style lang="scss" scoped>
.ms_card {
   position: relative;
   transform-style: preserve-3d;
   &:hover &__front {
      transform: rotateX(-180deg);
   }
   &:hover &__back {
      transform: rotateX(0deg);
   }
   &__front {
      backface-visibility: hidden;
      transform: rotateX(0deg);
      transition: 0.5s;
      img {
         object-fit: contain;
      }
   }
   &__back {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      background-color: var(--neutral-color-600);
      border: 2px solid var(--neutral-color-600);
      padding: 0.5rem;
      backface-visibility: hidden;
      transform: rotateX(180deg);
      transition: 0.5s;
      overflow-y: auto;
   }
}
</style>
