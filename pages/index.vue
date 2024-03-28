<script setup lang="ts">
useHead({
  title: "HOWTOCS2.com / Seu portal de notícias sobre o Counter Strike brasileiro.",
  htmlAttrs: {
    lang: 'pt-br',
  },
  meta: [
    {
      name: 'description',
      content: 'Seu portal de notícias sobre o Counter Strike brasileiro. Fique por dentro das últimas novidades, análises, eventos e muito mais.'
    },
    {
      name: 'keywords',
      content: 'CS2, Counter Strike, CS, CS:GO, Brasil, brasileiro, notícias, esports'
    },
    {
      name: 'author',
      content: 'HOWTOCS2'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    },
    {
      name: 'content-type',
      content: 'text/html; charset=utf-8'
    },
    {
      name: 'language',
      content: 'Portuguese'
    }
  ]
});
</script>

<template>
  <section class="w-full xl:w-3/5 flex flex-col space-y-4 md:space-y-8">
    <MainArticle/>
    <ArticleWrapper/>
  </section>
</template>
