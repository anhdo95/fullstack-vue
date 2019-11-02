export default {
  count: 1,
  getItems() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(JSON.parse(localStorage.items || "[]"));
      }, 1000);
    });
  },
  saveItems(items) {
    const success = !!(this.count++ % 2);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!success) return reject({ success });

        localStorage.items = JSON.stringify(items);
        resolve({ success });
      }, 1000);
    });
  }
};
