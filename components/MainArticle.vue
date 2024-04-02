<script setup lang="ts">
import formatPostDate from '~/utils/format-post-date';

const router = useRouter();

const redirectToArticle = (slug: string) => {
  router.push("/p/" + slug);
}

const { data: last_post } = await useAsyncData('last_post_data', () => queryContent('posts').where({ draft: false }).sort({ id: -1, $numeric: true }).limit(1).findOne());
</script>

<template>
  <article 
    v-if="last_post" 
    @click.exact="redirectToArticle(last_post.slug)" 
    class="group select-none w-full h-fit bg-zinc-800 rounded-lg overflow-hidden transition-all duration-150 hover:bg-gradient-to-tr hover:from-indigo-500/20 hover:via-zinc-800 hover:to-zinc-800 drop-shadow-sm"
  >
    <div class="relative w-full max-h-96 overflow-hidden">
      <Image :src="last_post.thumbnail" :alt="last_post.title" :colored="false" class="group-hover:scale-105 transition-all duration-300"/>
      <span class="absolute right-2 bottom-2 text-sm px-2 py-1 text-indigo-400 bg-zinc-900 rounded-md font-bold">{{ formatPostDate(last_post.date) }}</span>
    </div>
    <div class="w-full p-4 space-y-2">
      <NuxtLink :to="'/p/' + last_post.slug" class="text-2xl font-bold text-white">{{ last_post.title }}</NuxtLink>
      <p class="prose prose-invert max-w-full line-clamp-2">{{ last_post.description }}</p>
      <div class="mt-1 flex flex-row space-x-2">
        <span v-for="tag in last_post.tags" :key="tag" class="text-sm px-2 py-1 text-indigo-400 bg-zinc-900 rounded-sm group-hover:bg-zinc-800 group-hover:text-indigo-300">
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>