
const LinkedList = require('./src/linkedList')

var ll = new LinkedList();
 
ll.addToHead(123);
ll.addToHead(70);
ll.addToHead('hello');
ll.addToTail(19);
ll.addToTail('world');
ll.addToTail(20);
ll.addToTail(567)
ll.addToTail(333)
ll.addToTail(111)
ll.addToHead(4)
// console.log(ll);
console.log(ll.head.next.value);
console.log(ll.tail.prev.prev.prev.prev.value);