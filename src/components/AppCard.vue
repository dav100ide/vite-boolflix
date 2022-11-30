<script>
export default {
   props: {
      info: Object,
   },
};
</script>
<template>
   <div class="ms_card h-100">
      <h2>{{ info.title }}</h2>
      <h3>{{ info.original_title }}</h3>
      <p>{{ info.original_language }}</p>
      <div>{{ info.vote_average }}</div>
   </div>
</template>

<style lang="scss" scoped>
.ms_card {
   border: 1px solid black;
   padding: 0.5rem;
}
</style>
