<script setup lang="ts">
import { useStore } from "../../../../composable/useStore";
import { categories } from "../../../../constants";
import { formatPrice } from "../../../../utils/formatPrice";

const { filterSell, showModalEdit } = useStore();
</script>

<template>
  <section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <article
      v-if="filterSell.length"
      v-for="item in filterSell"
      :key="item.id"
      :style="{ borderColor: categories[item.type].color }"
      class="relative p-4 rounded-lg border-2 flex gap-4 items-center group"
    >
      <div
        :style="{ color: categories[item.type].color }"
        v-html="categories[item.type].icon"
        class="text-2xl"
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
        <i
          class="bx bx-edit cursor-pointer absolute right-2 bottom-2 opacity-0 group-hover:opacity-100"
          :style="{ color: categories[item.type].color }"
          @click="showModalEdit(item)"
        ></i>
      </div>
    </article>

    <div v-else>
      <p>No hay ningun gasto agrega uno!</p>
    </div>
  </section>
</template>
