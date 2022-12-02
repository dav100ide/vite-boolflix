<script>
import MovieSection from './MainSections/MovieSection.vue';
import ShowsSection from './MainSections/ShowsSection.vue';

export default {
   components: {
      MovieSection,
      ShowsSection,
   },
};
</script>

<template>
   <main>
      <!-- sezione film-->
      <MovieSection />
      <!-- /sezione film-->
      <hr class="border-2" />
      <!-- sezione shows -->
      <ShowsSection />
      <!-- /sezione shows -->
   </main>
</template>

<style lang="scss" scoped></style>
