
const LinkedList = require('./src/linkedList')

var ll = new LinkedList();

ll.addToTail(567)
ll.addToTail(333)
ll.addToTail(111)
ll.addToHead(4)
console.log(ll);
console.log(ll.tail.prev.prev.prev);