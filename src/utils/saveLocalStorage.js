export const saveLocalStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data))
