import { promisify } from "./utils/Promisify";

function showModalFnDescriptor(modalName: string) {
  return {
    type: "SHOW_MODAL_BY_NAME" as const,
    payload: { modalName },
  };
}

async function showModal(...args: any) {
  // @ts-ignore
  return promisify(showModalFnDescriptor)(...args);
}

function closeModalFnDescriptor(modalName: string) {
  return {
    type: "CLOSE_MODAL" as const,
    payload: { modalName },
  };
}

async function closeModal(...args: any) {
  // @ts-ignore
  return promisify(closeModalFnDescriptor)(...args);
}

export { showModal, closeModal };
