<script setup lang="js">
const { slug } = useRoute().params;
const { data: post } = await useAsyncData('post_data_' + slug, () => queryContent('posts').where({ draft: false, slug: slug }).findOne());

if (post && post.value && post.value.title) {
  useHead({
    title: post.value.title,
    meta: [
      {
        name: 'description',
        content: post.value.title,
      },
      {
        name: 'keywords',
        content: post.value.tags,
      },
      {
        name: 'author',
        content: post.value.author,
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
}
</script>

<template>
  <article
    v-if="post" 
    class="w-full lg:w-3/5 flex flex-col space-y-4 md:space-y-8"
  >
    <div class="relative w-full max-h-96 overflow-hidden rounded-lg">
      <Image :src="post.thumbnail" :alt="post.title"/>
      <div class="absolute right-2 bottom-2 flex flex-row justify-center items-center space-x-2">
        <span v-if="post.author" class="text-sm px-2 py-1 text-indigo-400 bg-zinc-900 rounded-md font-bold select-all"><span class="select-none">Escrito por: </span>{{ post.author }}</span>
        <span v-if="post.date" class="text-sm px-2 py-1 text-indigo-400 bg-zinc-900 rounded-md font-bold">{{ new Date(post.date).toLocaleDateString() }}</span>
      </div>
    </div>
    <h1 class="text-xl sm:text-2xl lg:text-5xl text-white font-bold">{{ post.title }}</h1>
    <div class="prose prose-invert prose-lg max-w-full w-full prose-strong:text-indigo-500 prose-a:text-indigo-500 prose-a:underline">
      <ContentRenderer :value="post"/>
    </div>
    <div class="w-full border-t border-zinc-800 py-2">
      <span class="text-sm font-light text-zinc-500 select-none">TAGS:</span>
      <div class="mt-1 flex flex-row space-x-2">
        <span v-for="tag in post.tags" :key="tag" class="text-sm px-2 py-1 text-indigo-500 bg-zinc-950 rounded-sm hover:text-indigo-400 select-none">
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
  <div 
    v-else
    class="w-full lg:w-3/5 flex flex-col space-y-2 justify-center items-center"
  >
    <h1 class="text-9xl font-bold text-indigo-500">404</h1>
    <h2 class="text-xl font-bold text-indigo-500">Página não encontrada</h2>
    <span>Parece que a página que você está procurando foi abatida.</span>
    <NuxtLink to="/" class="mt-1 px-4 py-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-600">Voltar ao Spawn</NuxtLink>
  </div>
</template>