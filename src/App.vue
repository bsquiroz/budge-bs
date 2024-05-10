<script setup lang="ts">
import Layout from "./components/Layout/Layout.vue";
import Budge from "./components/Budge/Budge.vue";
import InfoBudge from "./components/InfoBudge/InfoBudge.vue";
import { useStore } from "./composable/useStore";
import { computed } from "vue";

const { budge } = useStore();

const isExistBudge = computed(() => Object.values(budge).some((v) => v));
</script>

<template>
  <Layout>
    <Budge v-if="!isExistBudge" />
    <InfoBudge v-else />
  </Layout>
</template>
