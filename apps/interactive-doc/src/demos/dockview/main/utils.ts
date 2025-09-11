export const nextId = (() => {
  let counter = 0;

  return () => counter++;
})();
