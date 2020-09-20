const Storage = {
  // Store one item
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify({ value }));
  },
  // Get one item
  get: (key) => {
    const ret = JSON.parse(localStorage.getItem(key));
    return ret ? ret.value : null;
  },
  // Delete on item
  delete: (key) => {
    localStorage.removeItem(key);
  },
  // Clear all localstorage data
  clear: () => {
    localStorage.clear();
  },
  // Get all keys
  keys: () => {
    localStorage.keys();
  },
};

export default Storage;
