<script setup lang="ts">
import { Transition } from "vue";
import { useStore } from "../../composable/useStore";

const { showModalBudge, objSell, handleAddSell, handleShowModalBudge } =
  useStore();

const handleSubmit = () => {
  if (!objSell.amount || !objSell.name || !objSell.type)
    return alert("todos los datos son necesarios");

  handleAddSell();
};
</script>

<template>
  <Transition>
    <section
      v-if="showModalBudge"
      class="h-screen fixed bg-black/50 w-screen left-0 top-0 flex justify-center items-center text-white"
    >
      <form
        @submit.prevent="handleSubmit"
        class="bg-slate-900 p-4 rounded-lg min-w-96 grid gap-4 relative"
      >
        <i
          class="bx bx-x-circle absolute -top-2 -right-2 cursor-pointer"
          @click="() => handleShowModalBudge(false)"
        />
        <label class="flex flex-col gap-2"
          ><span class="font-bold text-xl">Nombre del gasto</span>
          <input
            type="text"
            class="p-2 rounded-full outline-none border-2 border-white bg-transparent text-white"
            v-model="objSell.name"
          />
        </label>

        <label class="flex flex-col gap-2"
          ><span class="font-bold text-xl">Cantidad del gasto</span>
          <input
            type="number"
            class="p-2 rounded-full outline-none border-2 border-white bg-transparent text-white"
            v-model="objSell.amount"
          />
        </label>

        <label class="flex flex-col gap-2"
          ><span class="font-bold text-xl">Categoria del gasto</span>
          <select
            class="rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
            v-model="objSell.type"
          >
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
            <option value="4">Categoria 4</option>
          </select>
        </label>

        <button class="bg-blue-500 px-4 py-2 rounded-full font-bold">
          Guardar Gasto!
        </button>
      </form>
    </section>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
