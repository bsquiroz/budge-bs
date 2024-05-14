<script setup lang="ts">
import { useStore } from "../../composable/useStore";
import InfoBudgeMain from "./components/InfoBudgeMain/InfoBudgeMain.vue";
import InfoBudgeFilter from "./components/InfoBudgeFilter/InfoBudgeFilter.vue";
import InfoBudgeItems from "./components/InfoBudgeItems/InfoBudgeItems.vue";
import Title from "../Title/Title.vue";

const { budge } = useStore();
</script>

<template>
  <section class="flex flex-col gap-4">
    <Title :title="budge.desc" />
    <InfoBudgeMain />
    <InfoBudgeFilter />
    <InfoBudgeItems />
  </section>
</template>
