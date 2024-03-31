<script setup lang="ts">

const jsonld = {"@context": "https://schema.org", "@graph": [{"@type": "WebPage","@id": "https://howtocs2.com/","url": "https://howtocs2.com/","name": "HOWTOCS2.com / Seu portal de notícias sobre o Counter Strike brasileiro. Fique por dentro das últimas novidades, análises, eventos e muito mais.","isPartOf": {  "@id": "https://howtocs2.com/"},"about": {  "@id": "https://howtocs2.com/"},"primaryImageOfPage": {  "@id": "https://howtocs2.com/"},"image": {  "@id": "https://howtocs2.com/"},"datePublished": "2023-01-01T18:00:00+00:00","dateModified": new Date().toISOString(),"description": "HOWTOCS2.com / Seu portal de notícias sobre o Counter Strike brasileiro. Fique por dentro das últimas novidades, análises, eventos e muito mais.","breadcrumb": {  "@id": "https://howtocs2.com/"},"inLanguage": "pt-BR","potentialAction": [  {    "@type": "ReadAction",    "target": [      "https://howtocs2.com/"    ]  }]},{"@type": "BreadcrumbList","@id": "https://howtocs2.com/","itemListElement": [  {    "@type": "ListItem",    "position": 1,    "name": "Home"  }]},{"@type": "WebSite","@id": "https://howtocs2.com/","url": "https://howtocs2.com/","name": "HOWTOCS2","description": "Seu portal de notícias sobre o Counter Strike brasileiro. Fique por dentro das últimas novidades, análises, eventos e muito mais.","publisher": {  "@id": "https://howtocs2.com/"},"inLanguage": "pt-BR"},{"@type": "Organization","@id": "https://howtocs2.com/","name": "HOWTOCS2","url": "https://howtocs2.com/","sameAs": [  "https://twitter.com/howtocs2"]}]};

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
</script>

<template>
  <section class="w-full xl:w-3/5 flex flex-col space-y-4 md:space-y-8">
    <MainArticle/>
    <ArticleWrapper/>
  </section>
</template>
