export const getRandomString = (length = 10) => (Math.random() + 1).toString(36).substring(2, length + 2);

export const handleInvokeError = ({ event }: any): void => {
  console.error(event?.error);
};
