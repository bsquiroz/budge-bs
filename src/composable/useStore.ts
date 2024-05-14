import { reactive, ref } from "vue";

const initialObjSell = {
  id: "",
  date: 0,
  name: "",
  amount: 0,
  type: "",
};

const budge = reactive({
  value: 0,
  desc: "",
});

const valuesBudge = reactive({
  bugbe: 0,
  sell: 0,
  rest: 0,
});

const showModalBudge = ref(false);

const objSell = reactive(initialObjSell);

const sells = ref<
  {
    id: string;
    date: number;
    name: string;
    amount: number;
    type: string;
  }[]
>([]);

export function useStore() {
  const handleBudge = () => {
    valuesBudge.bugbe = budge.value;
    valuesBudge.sell = 0;
    valuesBudge.rest = budge.value;
  };

  const handleShowModalBudge = (value: boolean) => {
    if (value) return (showModalBudge.value = true);

    restoreObjSell();
    showModalBudge.value = false;
  };

  const handleAddSell = () => {
    objSell.id = crypto.randomUUID();
    objSell.date = new Date() as unknown as number;

    sells.value.push({ ...objSell });

    restoreObjSell();

    showModalBudge.value = false;
  };

  const restoreObjSell = () => {
    Object.assign(objSell, {
      id: "",
      date: 0,
      name: "",
      amount: 0,
      type: "",
    });
  };

  return {
    budge,
    valuesBudge,
    showModalBudge,
    objSell,
    sells,
    handleBudge,
    handleShowModalBudge,
    handleAddSell,
  };
}
