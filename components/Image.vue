<script setup lang="ts">
  const { src, colored } = defineProps({
    src: {
      type: String,
      required: true,
    },
    colored: Boolean
  })
</script>

<template>
  <div v-if="colored" class="relative w-full">
    <div class="z-10 absolute w-full h-full left-0 top-0 bg-gradient-to-r from-indigo-500/50 via-indigo-500/20 to-transparent"></div>
    <img :src="src" class="z-0 w-full object-cover saturate-0"/>
  </div>
  <img v-else :src="src" class="w-full object-cover"/>
</template>

<style>
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
</style>