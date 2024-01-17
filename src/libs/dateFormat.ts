export const dateFormat = (data: string | Date) => {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(data instanceof Date ? data : new Date(data));
};
