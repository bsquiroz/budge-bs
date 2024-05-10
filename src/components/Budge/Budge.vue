<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../../composable/useStore";

const { budge, handleBudge } = useStore();

const value = ref(0);
const desc = ref("");

const handleSubmit = () => {
  if (!value.value || !desc.value)
    return alert("todos los campos son necesarios!");

  budge.value = value.value;
  budge.desc = desc.value;

  handleBudge();
};
</script>

<template>
  <form class="grid gap-5" @submit.prevent="handleSubmit">
    <label class="flex flex-col gap-4"
      ><span class="font-bold text-xl">Presupuesto</span>
      <input
        type="number"
        class="p-2 rounded-full outline-none border-2 border-white bg-transparent text-white"
        v-model="value"
      />
    </label>

    <label class="flex flex-col gap-4"
      ><span class="font-bold text-xl">Descripcion del presupuesto</span>
      <input
        type="text"
        class="p-2 rounded-full outline-none border-2 border-white bg-transparent text-white"
        v-model="desc"
      />
    </label>

    <button class="bg-blue-500 p-4 rounded-full font-bold text-2xl">
      Guardar presupuesto!
    </button>
  </form>
</template>
