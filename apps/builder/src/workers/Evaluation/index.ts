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

function removeValueFnDescriptor(key: string) {
  return {
    type: "REMOVE_VALUE" as const,
    payload: {
      key,
    },
  };
}


export async function removeValue(this: any, key: string) {
  // TODO
}
