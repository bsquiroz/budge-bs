import { reactive } from "vue";

const budge = reactive({
  value: 0,
  desc: "",
});

const valuesBudge = reactive({
  bugbe: 0,
  sell: 0,
  rest: 0,
});

export function useStore() {
  const handleBudge = () => {
    valuesBudge.bugbe = budge.value;
    valuesBudge.sell = 0;
    valuesBudge.rest = budge.value;
  };

  return {
    budge,
    handleBudge,
    valuesBudge,
  };
}
