import { promisify } from "./utils/Promisify";

function copyToClipboardFnDescriptor(
  data: string,
  options?: { debug?: boolean; format?: string },
) {
  return {
    type: "COPY_TO_CLIPBOARD" as const,
    payload: {
      data,
      options: { debug: options?.debug, format: options?.format },
    },
  };
}

async function copyToClipboard(...args: any) {
  // @ts-ignore
  return promisify(copyToClipboardFnDescriptor)(...args);
}

export default copyToClipboard;
