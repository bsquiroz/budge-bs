<script setup lang="ts">
import { useStore } from "../../../../composable/useStore";

const { sells } = useStore();
</script>

<template>
  <section>
    <article v-if="sells.length" v-for="item in sells" :key="item.id">
      <p>{{ item.name }}</p>
      <p>{{ item.amount }}</p>
      <p>{{ item.date }}</p>
      <p>{{ item.type }}</p>
    </article>

    <div v-else>
      <p>No hay ningun gasto agrega uno!</p>
    </div>
  </section>
</template>
