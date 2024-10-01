const { NotImplementedError } = require("../extensions/index.js");

class BloomFilter {
  constructor(size = 1000, hashCount = 3) {
    this.size = size; // Размер битового массива
    this.hashCount = hashCount; // Количество хеш-функций
    this.store = this.createStore(size); // Создание битового массива
  }

  createStore(size) {
    const store = new Array(size).fill(false); 
    return {
      set: (index) => { store[index] = true; },
      get: (index) => store[index],
      size: () => size,
    };
  }

  insert(item) {
    const hashValues = this.getHashValues(item);
    hashValues.forEach(hash => {
      this.store.set(hash); 
    });
  }

  mayContain(item) {
    const hashValues = this.getHashValues(item);
    return hashValues.every(hash => this.store.get(hash));
  }

  hash1(item) {
    let hash = 0;
    for (let i = 0; i < item.length; i++) {
      hash = (hash * 31 + item.charCodeAt(i)) % this.size; // Полиномиальное хеширование
    }
    return (hash + this.size) % this.size; // Обеспечение положительного индекса
  }

  hash2(item) {
    let hash = 0;
    for (let i = 0; i < item.length; i++) {
      hash = (hash * 37 + item.charCodeAt(i)) % this.size; // Другой множитель
    }
    return (hash + this.size) % this.size; // Обеспечение положительного индекса
  }

  hash3(item) {
    let hash = 0;
    for (let i = 0; i < item.length; i++) {
      hash = (hash * 41 + item.charCodeAt(i)) % this.size; // Другой множитель
    }
    return (hash + this.size) % this.size; // Обеспечение положительного индекса
  }

  getHashValues(item) {
    return [
      this.hash1(item),
      this.hash2(item),
      this.hash3(item),
    ];
  }
}

module.exports = BloomFilter;
