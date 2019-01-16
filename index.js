function getName(node) {
  return node.name;
}

function next(head, collection) {
  let node = head;
  let nextAddress = node.next;
  return collection[nextAddress];
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function indexAt(head, index) {
  let node = head;
  for (i = 0; i < index; i++) {
     node = next(node);
  }

  return node;
}
