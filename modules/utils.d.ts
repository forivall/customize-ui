type Override<T, C> = T extends (...args: infer A) => infer R ? (this: C, original: () => R, args: A) => R : never;
export function override<T, K extends keyof T>(where: new (...args: any[]) => T, name: K, cb: Override<T[K], T>): void;
export function addStyleSheet(url: string): void;
export function addStyle(style: string): void;
export { __decorate as decorate, __param as param } from 'tslib';
