<script setup lang="js">
  useHead({
    title: "HOWTOCS2.com / Página não encontrada.",
    htmlAttrs: {
      lang: 'pt-br',
    },
  });
</script>

<template>
  <div 
    class="w-full lg:w-3/5 flex flex-col space-y-2 justify-center items-center"
  >
    <h1 class="text-9xl font-bold text-indigo-500">404</h1>
    <h2 class="text-xl font-bold text-indigo-500">Página não encontrada</h2>
    <span>Parece que a página que você está procurando foi abatida.</span>
    <NuxtLink to="/" class="mt-1 px-4 py-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-600">Voltar ao Spawn</NuxtLink>
  </div>
</template>