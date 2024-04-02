<script setup lang="ts">
  type Map = "ancient" | "anubis" | "dust2" | "inferno" | "mirage" | "nuke" | "overpass" | "vertigo";

  export type Props = {
    name_a: String,
    name_b: String,
    score_a: String,
    score_b: String,
    map: Map,
  }

  const { name_a, name_b, score_a, score_b, map} = defineProps<Props>();

</script>

<template>
  <div class="relative w-full h-fit flex justify-center items-center">
    <div class="relative w-full sm:w-3/5 h-44 overflow-hidden rounded-xl bg-gradient-to-tr from-indigo-500/30 to-zinc-850 border border-indigo-300">
      <span class="absolute w-full left-0 top-0 px-2 py-1 text-center lg:text-left text-white font-bold text-sm">PARTIDA 1 (NUKE)</span>
      <div class="absolute w-full h-full rounded-xl overflow-hidden flex justify-center items-center">
        <img :src="`/img/maps/${map.toLowerCase()}.webp`" class="w-full h-full object-cover opacity-10">
      </div>
      <div class="relative z-50 w-full h-full flex flex-row justify-evenly items-center">
        <div class="flex flex-col items-center">
          <span class="text-white text-3xl font-bold">{{ name_a }}</span>
          <span class="text-indigo-300 text-xl font-bold drop-shadow-xl">{{ score_a }}</span>
        </div>
        <span class="text-white text-3xl font-bold">vs</span>
        <div class="flex flex-col items-center">
          <span class="text-white text-3xl font-bold">{{ name_b }}</span>
          <span class="text-indigo-300 text-xl font-bold drop-shadow-xl">{{ score_b }}</span>
        </div>
      </div>
    </div>
  </div>
</template>