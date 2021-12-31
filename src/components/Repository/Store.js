export function storeData(key, data) {
  // store cache
  localStorage.setItem(key, JSON.stringify(data));
}
