export function formatPrice(value: number) {
  return Number(value).toLocaleString("es-US", {
    style: "currency",
    currency: "USD",
  });
}
