<script setup lang="ts">
import { useStore } from "../../../../composable/useStore";
import { formatPrice } from "../../../../utils/formatPrice";

const { valuesBudge } = useStore();
</script>

<template>
  <section class="grid grid-cols-3">
    <div class="col-span-1"></div>
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
      <button class="bg-blue-500 p-2 rounded-full font-bold w-1/2 self-center">
        Agregar un gasto
      </button>
    </div>
  </section>
</template>
