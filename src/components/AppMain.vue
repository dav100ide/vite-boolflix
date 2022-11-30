<script>
import AppCard from './AppCard.vue';
export default {
   components: {
      AppCard,
   },
};
</script>

<template>
   <main>
      MAIN:
      <AppCard v-for="i in 2" />
   </main>
</template>

<style lang="scss" scoped></style>
