<script setup lang="ts">
  const { id } = defineProps({
    id: {
      type: String,
      required: true,
    }
  })
</script>

<template>
  <div class="w-full h-fit flex justify-center items-center">
    <iframe width="550" height="650" scrolling="no" allowfullscreen :src="`https://platform.twitter.com/embed/Tweet.html?dnt=true&embedId=twitter-widget-0&frame=false&hideCard=false&hideThread=true&id=${id}&lang=pt&theme=dark&widgetsVersion=82e1070%3A1619632193066&width=550px`"/>
  </div>
</template>

<style>
  iframe {
    min-height: 650px;
  }
</style>