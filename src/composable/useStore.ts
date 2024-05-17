import { computed, reactive, ref, watch } from "vue";

import { Sell } from "../constants";
import { formatDate } from "../utils/formatDate";

const budge = reactive({
  value: getLS("budgeValue") || 0,
  desc: getLS("budgeDesc") || "",
});

const valuesBudge = reactive({
  bugbe: getLS("valuesBudge") || 0,
  sell: getLS("valuesSell") || 0,
  rest: getLS("valuesRest") || 0,
});

const sells = ref<Sell[]>(getLS("sells") || []);
const keySellFilter = ref<string[]>([]);

const filterSell = computed(() => {
  return !keySellFilter.value.length
    ? sells.value
    : sells.value.filter((sell) => keySellFilter.value.includes(sell.type));
});

const objSell = reactive<Sell>({
  id: "",
  date: "",
  name: "",
  amount: 0,
  type: "other",
});

const showModalBudge = ref(false);

function getLS(key: string) {
  return JSON.parse(localStorage.getItem(key)!);
}

function setLS(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function useStore() {
  const handleBudge = () => {
    valuesBudge.bugbe = budge.value;
    valuesBudge.sell = 0;
    valuesBudge.rest = budge.value;

    setLS("budgeValue", budge.value);
    setLS("budgeDesc", budge.desc);
    setLS("valuesSell", valuesBudge.sell);
  };

  const showModalEdit = (sell: Sell) => {
    showModalBudge.value = true;

    Object.assign(objSell, sell);
  };

  const handleShowModalBudge = (value: boolean) => {
    if (value) return (showModalBudge.value = true);

    restoreObjSell();
    showModalBudge.value = false;
  };

  const handleAddSell = () => {
    objSell.id = crypto.randomUUID();
    objSell.date = formatDate();

    sells.value.push({ ...objSell });

    restoreObjSell();

    showModalBudge.value = false;
  };

  const handleEditSell = () => {
    const index = sells.value.findIndex((item) => item.id === objSell.id);

    sells.value[index] = { ...objSell };

    restoreObjSell();

    showModalBudge.value = false;
  };

  const handleDeleteSell = () => {
    const res = confirm("Seguro que quieres eliminar?");
    if (!res) return;

    const index = sells.value.findIndex((item) => item.id === objSell.id);

    sells.value.splice(index, 1);

    restoreObjSell();

    showModalBudge.value = false;
  };

  const restoreObjSell = () => {
    Object.assign(objSell, {
      id: "",
      date: 0,
      name: "",
      amount: 0,
      type: "other",
    });
  };

  watch(
    () => valuesBudge.bugbe,
    () => setLS("valuesBudge", valuesBudge.bugbe)
  );
  watch(
    () => valuesBudge.rest,
    () => setLS("valuesRest", valuesBudge.rest)
  );
  watch(
    () => valuesBudge.sell,
    () => setLS("valuesSell", valuesBudge.sell)
  );
  watch(sells.value, () => setLS("sells", sells.value));

  return {
    budge,
    valuesBudge,
    showModalBudge,
    objSell,
    sells,
    filterSell,
    keySellFilter,
    handleBudge,
    handleShowModalBudge,
    handleAddSell,
    handleEditSell,
    handleDeleteSell,
    showModalEdit,
  };
}
