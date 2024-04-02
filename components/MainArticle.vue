<script setup lang="ts">
  import type { ParsedContent } from '@nuxt/content/types';
  import redirectToArticle from '~/utils/redirect-to-article';
  import formatPostDate from '~/utils/format-post-date';

  export interface MainArticleProps {
    article: ParsedContent,
  }

  const { article } = defineProps<MainArticleProps>();
</script>

<template>
  <article
    @click.exact="redirectToArticle(article.slug)" 
    class="group select-none w-full h-fit bg-zinc-800 rounded-lg overflow-hidden transition-all duration-150 hover:bg-gradient-to-tr hover:from-indigo-500/20 hover:via-zinc-800 hover:to-zinc-800 drop-shadow-sm"
  >
    <div class="relative w-full max-h-96 overflow-hidden">
      <Image :src="article.thumbnail" :alt="article.thumbnail_alt" :colored="false" class="group-hover:scale-105 transition-all duration-300"/>
      <span class="absolute right-2 bottom-2 text-sm px-2 py-1 text-indigo-400 bg-zinc-900 rounded-md font-bold">{{ formatPostDate(article.date) }}</span>
    </div>
    <div class="w-full p-4 space-y-2">
      <NuxtLink :to="'/p/' + article.slug" class="text-2xl font-bold text-white">{{ article.title }}</NuxtLink>
      <p class="prose prose-invert max-w-full line-clamp-2">{{ article.description }}</p>
      <div class="mt-1 flex flex-row space-x-2">
        <span v-for="tag in article.tags" :key="tag" class="text-sm px-2 py-1 text-indigo-400 bg-zinc-900 rounded-sm group-hover:bg-zinc-800 group-hover:text-indigo-300">
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>