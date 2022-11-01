export const localS = {
  get: (key: string): string | number | null =>
    window.localStorage.getItem(key),
  set: (key: string, value: object) =>
    window.localStorage.setItem(key, JSON.stringify(value)),
  setString: (key: string, value: string) =>
    window.localStorage.setItem(key, value),
  remove: (key: string) => window.localStorage.removeItem(key),
};
