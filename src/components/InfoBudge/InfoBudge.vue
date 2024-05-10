<script setup lang="ts">
import { useStore } from "../../composable/useStore";
import InfoBudgeMain from "./components/InfoBudgeMain/InfoBudgeMain.vue";
import InfoBudgeFilter from "./components/InfoBudgeFilter/InfoBudgeFilter.vue";

const { budge } = useStore();
</script>

<template>
  <section class="flex flex-col gap-4">
    <h2 class="text-4xl font-extrabold">{{ budge.desc }}</h2>
    <InfoBudgeMain />
    <InfoBudgeFilter />
  </section>
</template>
