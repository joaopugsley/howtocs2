<script setup lang="ts">
  import type { ParsedContent } from '@nuxt/content/types';

  export interface ArticleWrapperProps {
    articles: ParsedContent[],
    maxRecentlyArticles: Number,
  }

  const { articles, maxRecentlyArticles } = defineProps<ArticleWrapperProps>();

  const showArchiveButton = () => {
    return articles.length === maxRecentlyArticles;
  };
</script>

<template>
  <div class="relative w-full h-fit flex flex-col space-y-2 md:space-y-4">
    <h3 class="text-sm font-bold text-indigo-400">MAIS RECENTES:</h3>
    <div class="relative w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      <Article 
        v-for="post in articles" 
        :key="post._path" 
        :slug="post.slug" 
        :title="post.title"
        :thumbnail="post.thumbnail"
        :alt="post.thumbnail_alt"
        :description="post.description"
        :date="post.date"
      />
    </div>
    <div v-if="showArchiveButton()" class="w-full flex flex-row-reverse">
      <NuxtLink to="/archive" class="w-full text-center sm:w-fit px-3 py-1 rounded-md bg-zinc-800 hover:bg-zinc-850 text-md font-bold text-white select-none">
        Ver mais
      </NuxtLink>
    </div>
  </div>
</template>