<script setup lang="ts">
  import type { ParsedContent } from '@nuxt/content/types';

  export interface ArticleWrapperProps {
    articles: ParsedContent[],
  }

  const { articles } = defineProps<ArticleWrapperProps>();
</script>

<template>
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
</template>