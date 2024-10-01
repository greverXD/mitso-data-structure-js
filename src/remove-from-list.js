const { NotImplementedError } = require('../extensions/index.js');


function ListNode(x) {
  this.value = x;
  this.next = null;
}

module.exports = function removeKFromList(l, k) {
  
  let dummyHead = new ListNode(0);
  dummyHead.next = l; 

  let current = dummyHead; 
  while (current.next) {
    if (current.next.value === k) {
      
      current.next = current.next.next;
    } else {
      
      current = current.next;
    }
  }

  
  return dummyHead.next;
};
