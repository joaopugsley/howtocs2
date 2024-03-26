<script setup lang="js">
const { slug } = useRoute().params;
</script>

<template>
  <article 
    class="w-full lg:w-3/5 flex flex-col space-y-4 md:space-y-8"
  >
    <ContentDoc
      :path="`/posts/${slug}`"
      v-slot="{doc}"
    >
      <div class="relative w-full max-h-96 overflow-hidden rounded-lg">
        <Image :src="doc.thumbnail" :alt="doc.title"/>
        <div class="absolute right-2 bottom-2 flex flex-row justify-center items-center space-x-2">
          <span v-if="doc.author" class="text-sm px-2 py-1 text-indigo-400 bg-zinc-900 rounded-md font-bold select-all"><span class="select-none">Escrito por: </span>{{ doc.author }}</span>
          <span v-if="doc.date" class="text-sm px-2 py-1 text-indigo-400 bg-zinc-900 rounded-md font-bold">{{ new Date(doc.date).toLocaleDateString() }}</span>
        </div>
      </div>
      <h1 class="text-xl sm:text-2xl lg:text-5xl text-white font-bold">{{ doc.title }}</h1>
      <div class="prose prose-invert prose-lg max-w-full w-full prose-strong:text-indigo-500 prose-a:text-indigo-500 prose-a:underline">
        <ContentRenderer :value="doc"/>
      </div>
      <div class="w-full border-t border-zinc-800 py-2">
        <span class="text-sm font-light text-zinc-500 select-none">TAGS:</span>
        <div class="mt-1 flex flex-row space-x-2">
          <span v-for="tag in doc.tags" :key="tag" class="text-sm px-2 py-1 text-indigo-500 bg-zinc-950 rounded-sm hover:text-indigo-400 select-none">
            {{ tag }}
          </span>
        </div>
      </div>
    </ContentDoc>
  </article>
</template>