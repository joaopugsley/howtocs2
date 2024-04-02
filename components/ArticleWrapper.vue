<script setup lang="ts">
import formatPostDate from '~/utils/format-post-date';

const router = useRouter();

const redirectToArticle = (slug: string) => {
  router.push("/p/" + slug);
}

const maxRecentlyPosts = 6;

const { data: posts } = await useAsyncData('posts_data', () => queryContent('posts').where({ draft: false }).sort({ id: -1, $numeric: true }).skip(1).limit(maxRecentlyPosts).find());

const showArchiveButton = () => {
  return posts.value?.length === maxRecentlyPosts;
}
</script>

<template>
  <div v-if="posts" class="relative w-full h-fit flex flex-col space-y-2 md:space-y-4">
    <h3 class="text-sm font-bold text-indigo-400">MAIS RECENTES:</h3>
    <div class="relative w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      <article
        v-for="post in posts"
        :key="post._path"
        @click.exact="redirectToArticle(post.slug)"
        class="group select-none w-full h-full bg-zinc-800 rounded-lg overflow-hidden transition-all duration-1000 hover:bg-gradient-to-tr hover:from-indigo-500/20 hover:via-zinc-800 hover:to-zinc-800 drop-shadow-sm"
      >
        <div class="relative w-full max-h-40 overflow-hidden">
          <Image :src="post.thumbnail" :alt="post.title" :colored="false" class="group-hover:scale-105 transition-all duration-300"/>
          <span class="absolute right-2 bottom-2 text-sm px-2 py-1 text-indigo-400 bg-zinc-900 rounded-md font-bold">{{ formatPostDate(post.date) }}</span>
        </div>
        <div class="p-4">
          <NuxtLink :to="'/p/' + post.slug" class="text-lg font-semibold">{{ post.title }}</NuxtLink>
          <p class="line-clamp-2 text-gray-200">{{ post.description }}</p>
        </div>
      </article>
    </div>
    <div v-if="showArchiveButton()" class="w-full flex flex-row-reverse">
      <NuxtLink to="/archive" class="w-full text-center sm:w-fit px-3 py-1 rounded-md bg-zinc-800 hover:bg-zinc-850 text-md font-bold text-white select-none">
        Ver mais
      </NuxtLink>
    </div>
  </div>
</template>