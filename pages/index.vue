<script setup lang="ts">

const jsonld = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage","@id": "https://howtocs2.com/","url": "https://howtocs2.com/","name": "HOWTOCS2.com / Seu portal de notícias sobre o Counter Strike brasileiro. Fique por dentro das últimas novidades, análises, eventos e muito mais.","isPartOf": {  "@id": "https://howtocs2.com/"},"about": {  "@id": "https://howtocs2.com/"},"primaryImageOfPage": {  "@id": "https://howtocs2.com/"},"image": {  "@id": "https://howtocs2.com/"},"datePublished": "2023-01-01T18:00:00+00:00","dateModified": new Date().toISOString(),"description": "HOWTOCS2.com / Seu portal de notícias sobre o Counter Strike brasileiro. Fique por dentro das últimas novidades, análises, eventos e muito mais.","breadcrumb": {  "@id": "https://howtocs2.com/"},"inLanguage": "pt-BR"},{"@type": "BreadcrumbList","@id": "https://howtocs2.com/","itemListElement": [  {    "@type": "ListItem",    "position": 1,    "name": "Home"  }]},{"@type": "WebSite","@id": "https://howtocs2.com/","url": "https://howtocs2.com/","name": "HOWTOCS2","description": "Seu portal de notícias sobre o Counter Strike brasileiro. Fique por dentro das últimas novidades, análises, eventos e muito mais.","publisher": {  "@id": "https://howtocs2.com/"},"inLanguage": "pt-BR"},{"@type": "Organization","@id": "https://howtocs2.com/","name": "HOWTOCS2","url": "https://howtocs2.com/","sameAs": [  "https://twitter.com/howtocs2"]}]};

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
      name: 'language',
      content: 'Portuguese'
    }
  ],
  script: [
    {
      hid: "app-json-ld",
      type: "application/ld+json",
      textContent: JSON.stringify(jsonld)
    }
  ]
});

const maxRecentlyArticles = 6; // the number of posts after the main article
const { data: last_posts } = await useAsyncData('last_posts_data', () => queryContent('posts').where({ draft: false }).sort({ id: -1, $numeric: true }).limit(maxRecentlyArticles + 1).find());

</script>

<template>
  <div class="w-full xl:w-3/5 flex flex-col space-y-4 md:space-y-8">
    <MainArticle v-if="last_posts && last_posts[0]" :article="last_posts[0]"/>
    <section v-if="last_posts && last_posts.length > 0" class="relative w-full h-fit flex flex-col space-y-2 md:space-y-4">
      <h3 class="text-sm font-bold text-indigo-400">MAIS RECENTES:</h3>
      <ArticleWrapper :articles="last_posts.slice(1)"/>
      <div v-if="last_posts.length > maxRecentlyArticles" class="w-full flex flex-row-reverse">
        <NuxtLink to="/archive" class="w-full text-center sm:w-fit px-3 py-1 rounded-md bg-zinc-800 hover:bg-zinc-850 text-md font-bold text-white select-none">
          Ver mais
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
