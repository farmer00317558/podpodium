import zh from './zh';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof zh;
  }
}
