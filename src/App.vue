<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
   components: {
      AppHeader,
      AppMain,
   },
};
</script>

<template>
   <div class="container py-1">
      <AppHeader />
      <AppMain />
   </div>
</template>

<style lang="scss">
@import './style/global.scss';
body {
   background-color: var(--neutral-color-900);
   color: var(--neutral-color-100);
}
</style>
