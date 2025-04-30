export default (properties: any, orderKey: any = 'order') => {
  const orderHash = new Map();
  // order is not a number of data
  const unsortedList: any[] = [];
  const insert = (item: any) => {
    const [, value] = item;
    if (typeof value[orderKey] !== 'number') {
      unsortedList.push(item);
      return;
    }
    if (orderHash.has(value[orderKey])) {
      orderHash.get(value[orderKey]).push(item);
    } else {
      orderHash.set(value[orderKey], [item]);
    }
  };

  properties.forEach((item: any) => insert(item));
  const sortedList = Array.from(orderHash.entries())
    .sort(([order1], [order2]) => order1 - order2) // The smaller the order value, the higher the priority
    .flatMap(([, items]) => items);
  return sortedList.concat(unsortedList);
};
