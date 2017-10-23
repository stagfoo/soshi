// @flow
/* eslint-disable */
declare var module: {
  hot: {
    accept(path: ?string): void,
  },
};
declare var Rmodules: {
  define: any,
};
declare var require: {
  (id: string): any,
  ensure(ids: Array<string>, callback?: { (require: typeof require): void }, chunk?: string): void,
};

declare var RAT: {
  (data: any): any,
  addCustomEvent(any): void,
};
/* eslint-enable */
