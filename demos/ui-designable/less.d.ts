// types/less.d.ts
declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}
