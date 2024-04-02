<script setup lang="ts">
  const { slug } = defineProps({
    slug: {
      type: String,
      required: true,
    }
  });

  const { data: posts } = await useAsyncData('posts_data', () => queryContent('posts').where({ draft: false, slug: { $ne: slug } }).sort({ id: -1, $numeric: true }).limit(3).find());
</script>

<template>
  <div v-if="posts" class="relative w-full h-fit flex flex-col space-y-2 md:space-y-4">
    <h3 class="text-sm font-bold text-indigo-400">LEIA TAMBÉM:</h3>
    <div class="relative w-full h-fit flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6">
      <Article 
        v-for="post in posts" 
        :key="post._path" 
        :slug="post.slug" 
        :title="post.title"
        :thumbnail="post.thumbnail"
        :alt="post.thumbnail_alt"
        :description="post.description"
        :date="post.date"
      />
    </div>
  </div>
</template>