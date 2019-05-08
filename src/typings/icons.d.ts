/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const value: any;
  export default value;

  export function ReactComponent(props: { className?: string }): JSX.Element;
}
