export const formatDate = () => {
  return new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};
