<script setup lang="ts">
  const { src, alt } = defineProps({
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div class="relative w-full h-96 flex justify-center items-center overflow-hidden p-0">
    <span v-if="alt" class="absolute right-2 bottom-2 text-xs sm:text-sm px-2 py-1 text-indigo-400 bg-zinc-900 rounded-md font-bold select-all"><span class="select-none">Foto: </span>{{ alt }}</span>
    <NuxtImg 
      :src="src" 
      :alt="alt" 
      format="webp" 
      class="w-full object-cover"
      placeholder
    />
  </div>
</template>