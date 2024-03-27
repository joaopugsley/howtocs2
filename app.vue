<template>
  <Navbar/>
  <main class="w-full bg-zinc-900 min-h-screen h-fit flex flex-col space-y-8 items-center p-4 sm:p-8 pt-28 sm:pt-36 pb-8 sm:pb-24">
    <NuxtPage/>
  </main>
  <Footer/>
</template>

<style lang="css">
  :root {
    --foreground-rgb: 24, 24, 27;
    --background-start-rgb: 24, 24, 27;
    --background-end-rgb: 24, 24, 27;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 320px;
    min-height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: rgb(9, 9, 11);
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(99, 102, 241);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(129, 140, 248);
  }

</style>