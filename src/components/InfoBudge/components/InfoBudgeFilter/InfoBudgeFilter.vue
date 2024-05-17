<script setup lang="ts">
import { ref, watch, TransitionGroup } from "vue";
import { categories, Categories } from "../../../../constants";
import { useStore } from "../../../../composable/useStore";

const { keySellFilter } = useStore();

const showOptionsFilters = ref(false);

const handleShowOptionsFilters = (value: boolean) => {
  showOptionsFilters.value = value;
};

const filters = ref<Categories>({} as unknown as Categories);

watch(filters.value, () => (keySellFilter.value = Object.keys(filters.value)));
</script>

<template>
  <section class="relative">
    <div
      class="border-2 border-white min-h-10 rounded-full flex flex-wrap items-center gap-4 px-4 py-2 cursor-pointer"
      :class="{ 'border-blue-500': showOptionsFilters }"
    >
      <p v-if="!Object.values(filters).length">Filtrar...</p>
      <TransitionGroup name="list">
        <article
          v-if="Object.values(filters).length"
          v-for="(value, key) in filters"
          :key="value.name"
          class="flex items-center gap-4"
        >
          <div
            v-html="value.icon"
            :style="{ color: value.color }"
            class="text-lg"
          />
          <p>{{ value.name }}</p>
          <i
            class="bx bx-x text-red-500 hover:bg-red-600 hover:rounded-full hover:text-white"
            @click="
              () => {
                delete filters[key];
                handleShowOptionsFilters(false);
              }
            "
          ></i>
        </article>
      </TransitionGroup>

      <i
        class="bx"
        :class="{
          'bxs-up-arrow': showOptionsFilters,
          'bxs-down-arrow': !showOptionsFilters,
        }"
        @click="() => handleShowOptionsFilters(!showOptionsFilters)"
      ></i>
    </div>

    <section
      v-if="showOptionsFilters"
      class="absolute grid gap-1 bg-slate-900 rounded-lg top-14 p-4 z-10"
    >
      <article
        v-for="(value, key) in categories"
        :key="value.name"
        class="flex items-center gap-4 cursor-pointer px-4 py-2 border-2 border-transparent rounded-lg hover:border-white"
        @click="
          () => {
            filters[key] = value;
            handleShowOptionsFilters(false);
          }
        "
      >
        <div
          v-html="value.icon"
          :style="{ color: value.color }"
          class="text-lg"
        />
        <p>{{ value.name }}</p>
      </article>
    </section>
  </section>
</template>
