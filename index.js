function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
   return collection[linkedList]
}

function next(head, collection) {
  return collection[head.next];
}

function nodeAt(n, linkedList, collection) {
  var node = headNode(linkedList, collection);
  for (let i=0; i<n; i++) {
    node = next(node, collection);
  }
  return node;
}
