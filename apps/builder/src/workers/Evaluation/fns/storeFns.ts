function storeFnDescriptor(key: string, value: string, persist = true) {
  return {
    type: "STORE_VALUE" as const,
    payload: {
      key,
      value,
      persist,
    },
  };
}
