<script setup lang="ts">
import { useStore } from "../../../../composable/useStore";
import { formatPrice } from "../../../../utils/formatPrice";

const { valuesBudge, handleShowModalBudge } = useStore();
</script>

<template>
  <section class="grid grid-cols-3">
    <div class="col-span-1 grid place-content-center">
      <p class="text-xl text-white font-bold">
        {{ Number(valuesBudge.percent).toFixed(2) }}%
      </p>

      <div :style="`--percent: ${valuesBudge.percent}`">
        <svg>
          <circle class="circle" r="65" cx="50%" cy="50%" pathLength="100" />
          <circle class="circle" r="65" cx="50%" cy="50%" pathLength="100" />
        </svg>
      </div>
    </div>
    <div class="col-span-2 flex flex-col gap-2">
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
  stroke: lightcoral;
  stroke-dasharray: var(--percent) 100;
}
</style>
