<script setup lang="ts">
import { useStore } from "../../../../composable/useStore";
import { categories } from "../../../../constants";
import { formatPrice } from "../../../../utils/formatPrice";

const { sells } = useStore();
</script>

<template>
  <section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <article
      v-if="sells.length"
      v-for="item in sells"
      :key="item.id"
      :style="{ borderColor: categories[item.type].color }"
      class="p-4 rounded-lg border-2 flex gap-4 items-center"
    >
      <div
        :style="{ color: categories[item.type].color }"
        v-html="categories[item.type].icon"
      />
      <div>
        <p class="font-bold">
          {{ item.name }}
          <span
            class="font-extrabold"
            :style="{ color: categories[item.type].color }"
            >{{ formatPrice(item.amount) }}</span
          >
        </p>
        <p>
          <small>{{ item.date }}</small>
        </p>
      </div>
    </article>

    <div v-else>
      <p>No hay ningun gasto agrega uno!</p>
    </div>
  </section>
</template>
