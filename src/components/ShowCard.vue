<script>
export default {
   props: {
      info: Object,
   },
};
</script>
<template>
   <div class="show h-100">
      <h2>{{ info.name }}</h2>
      <h6>{{ info.original_name }}</h6>
      <div>{{ info.vote_average }}</div>
      <p>{{ info.original_language }}</p>
   </div>
</template>

<style lang="scss" scoped>
.show {
   border: 1px solid green;
   padding: 0.5rem;
}
</style>
