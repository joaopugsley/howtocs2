<script setup lang="ts">
  import formatPostDate from '~/utils/format-post-date';
  import redirectToArticle from '~/utils/redirect-to-article';

  export interface ArticleProps {
    slug: string,
    title?: string,
    thumbnail?: string,
    alt?: string,
    description?: string,
    date?: string,
  }
  
  const { slug, title, thumbnail, alt, description, date } = defineProps<ArticleProps>();
</script>

<template>
  <article
    @click.exact="redirectToArticle(slug)"
    class="group select-none w-full min-h-full bg-zinc-800 rounded-lg overflow-hidden transition-all duration-100 hover:bg-gradient-to-tr hover:from-indigo-500/20 hover:via-zinc-800 hover:to-zinc-800 drop-shadow-sm"
  >
    <div class="relative w-full max-h-40 overflow-hidden">
      <Image 
        v-if="thumbnail"
        :src="thumbnail" 
        :alt="alt || title" 
        :colored="false" 
        class="group-hover:scale-105 transition-all duration-300"
      />
      <span v-if="date" class="absolute right-2 bottom-2 text-sm px-2 py-1 text-indigo-400 bg-zinc-900 rounded-md font-bold">{{ formatPostDate(date) }}</span>
    </div>
    <div class="p-4">
      <NuxtLink v-if="title" :to="`/p/${slug}`" class="text-lg font-semibold">{{ title }}</NuxtLink>
      <p v-if="description" class="line-clamp-2 text-gray-200">{{ description }}</p>
    </div>
  </article>
</template>