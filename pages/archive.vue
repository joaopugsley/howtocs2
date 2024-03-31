<script setup lang="js">
import { onMounted, onUnmounted } from 'vue';

  useHead({
    title: "Arquivo de Notícias",
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
    ]
  });

  const router = useRouter();

  const redirectToArticle = (slug) => {
    router.push("/p/" + slug);
  }

  const pagePosts = 18;

  const { data: posts } = await useAsyncData('posts_data', () => queryContent('posts').where({ draft: false }).sort({ id: -1 }).limit(pagePosts).find());

  const loadMorePosts = async () => {
    const currentPosts = posts.value;
    const lastPostId = currentPosts[currentPosts.length - 1].id;
    const newPosts = await queryContent('posts').where({ draft: false, id: { $lt: lastPostId } }).sort({ id: -1 }).limit(pagePosts).find();
    posts.value = [...currentPosts, ...newPosts];
  }

  const handleScroll = () => {
    const pageBottomReached = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;
    if (pageBottomReached) {
      loadMorePosts();
    }
  }

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  })

</script>

<template>
  <section class="w-full xl:w-3/5 flex flex-col space-y-2 md:space-y-4">
    <h1 class="text-sm font-bold text-indigo-400">ARQUIVO DE NOTÍCIAS:</h1>
    <div class="relative w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      <article
        v-for="post in posts"
        :key="post._path"
        @click.exact="redirectToArticle(post.slug)"
        class="group select-none w-full bg-zinc-800 rounded-lg overflow-hidden transition-all duration-1000 hover:bg-gradient-to-tr hover:from-indigo-500/20 hover:via-zinc-800 hover:to-zinc-800 drop-shadow-sm"
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
  </section>
</template>