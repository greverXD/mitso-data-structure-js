const { NotImplementedError } = require("../extensions/index.js");

module.exports = class BloomFilter {
  /**
   * @param {number} size - the size of the storage.
   */
  constructor() {
    // Bloom filter size directly affects the likelihood of false positives.
    // The bigger the size the lower the likelihood of false positives.
  }

  /**
   * @param {string} item
   */
  insert(/* item */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  /**
   * @param {string} item
   * @return {boolean}
   */
  mayContain(/* item */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  /**
   * Creates the data store for our filter.
   * We use this method to generate the store in order to
   * encapsulate the data itself and only provide access
   * to the necessary methods.
   *
   * @param {number} size
   * @return {Object}
   */
  createStore(/* size */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash1(/* item */) {
    throw new NotImplementedError("Not implemented");
    // remove line swith error and write your code here
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash2(/* item */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash3(/* item */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  /**
   * Runs all 3 hash functions on the input and returns an array of results.
   *
   * @param {string} item
   * @return {number[]}
   */
  getHashValues(/* item */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
};