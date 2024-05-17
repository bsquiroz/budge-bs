<script setup lang="ts">
import { Transition } from "vue";
import { useStore } from "../../composable/useStore";

const {
  showModalBudge,
  objSell,
  handleAddSell,
  handleShowModalBudge,
  handleEditSell,
  handleDeleteSell,
} = useStore();

const handleSubmit = () => {
  if (!objSell.amount || !objSell.name || !objSell.type)
    return alert("todos los datos son necesarios");

  if (objSell.id) {
    handleEditSell();
  } else {
    handleAddSell();
  }
};
</script>

<template>
  <Transition>
    <section
      v-if="showModalBudge"
      class="h-screen fixed bg-black/50 w-screen left-0 top-0 flex justify-center items-center text-white z-50"
    >
      <form
        @submit.prevent="handleSubmit"
        class="bg-slate-900 p-4 rounded-lg min-w-96 grid gap-4 relative"
      >
        <i
          class="bx bx-x-circle absolute -top-4 -right-4 cursor-pointer text-3xl text-red-500"
          @click="() => handleShowModalBudge(false)"
        />
        <h2 class="font-extrabold text-3xl text-center">
          {{ objSell.id ? "Formulario editar" : "Formulario crear" }}
        </h2>
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
            <option value="rent_house">Arriendo</option>
            <option value="bus">Pasajes bus</option>
            <option value="university">Universidad</option>
            <option value="eat">Comida</option>
            <option value="cinema">Cine</option>
            <option value="other">otros</option>
          </select>
        </label>

        <div class="flex">
          <button
            class="px-4 py-2 rounded-full font-bold flex-1"
            :class="{
              'bg-blue-500': !objSell.id,
              'bg-yellow-500 text-black': objSell.id,
            }"
          >
            {{ objSell.id ? "Editar" : "Guardar" }}
          </button>

          <i
            v-if="objSell.id"
            class="bx bxs-trash-alt text-3xl cursor-pointer text-red-500"
            @click="handleDeleteSell"
          />
        </div>
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
