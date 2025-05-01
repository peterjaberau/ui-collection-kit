
export const isString = (obj: any) => typeof obj === 'string'


export const isObjectOrArray = (obj: any): obj is object | any[] =>
  obj !== null && typeof obj === 'object';


export const isPlainObjectOrArray = (obj: any): obj is object | any[] =>
  obj !== null &&
  typeof obj === 'object' &&
  (Array.isArray(obj) || Object.getPrototypeOf(obj) === Object.prototype);






