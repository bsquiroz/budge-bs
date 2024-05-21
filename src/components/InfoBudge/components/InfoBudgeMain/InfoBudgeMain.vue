<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../../../../composable/useStore";
import { formatPrice } from "../../../../utils/formatPrice";

const { valuesBudge, handleShowModalBudge } = useStore();

const colorPercent = computed(() => {
  if (valuesBudge.percent > 70) return "#990000";
  if (valuesBudge.percent > 40) return "#F9D923";
  return "#367E18";
});
</script>

<template>
  <section class="grid grid-cols-3 gap-4">
    <div class="col-span-3 md:col-span-1 grid place-content-center">
      <div class="relative" :style="`--percent: ${valuesBudge.percent}`">
        <p
          class="text-xl text-white font-bold absolute inset-0 w-fit h-fit m-auto"
          :style="{ color: colorPercent }"
        >
          {{ Number(valuesBudge.percent).toFixed(2) }}%
        </p>
        <svg>
          <circle class="circle" r="65" cx="50%" cy="50%" pathLength="100" />
          <circle
            class="circle"
            r="65"
            cx="50%"
            cy="50%"
            pathLength="100"
            :style="{ stroke: colorPercent }"
          />
        </svg>
      </div>
    </div>
    <div class="col-span-3 md:col-span-2 flex flex-col gap-2">
      <p class="text-xl text-green-500">
        <span class="font-bold">Presupuesto: </span>
        {{ formatPrice(valuesBudge.bugbe) }}
      </p>
      <p class="text-xl text-red-500">
        <span class="font-bold">Gasto: </span>
        {{ formatPrice(valuesBudge.sell) }}
      </p>
      <p class="text-xl text-orange-500">
        <span class="font-bold">Restante: </span>
        {{ formatPrice(valuesBudge.rest) }}
      </p>
      <button
        class="bg-blue-500 p-2 rounded-full font-bold w-1/2 self-center"
        @click="() => handleShowModalBudge(true)"
      >
        Agregar un gasto
      </button>
    </div>
  </section>
</template>

<style scoped>
.circle {
  width: 150px;
  height: 150px;
  fill: none;
  stroke: #aaa;
  stroke-width: 20;
  stroke-dasharray: 101 100;
  transform: rotate(-90deg);
  transform-origin: 50%;
}

.circle:nth-child(2) {
  stroke-dasharray: var(--percent) 100;
}
</style>
