function getName(node) {
  return node.name;
}

function headNode(head, collection) {
  return collection[head];
}

function next(node, collection) {
  let nextNode = node.next;
  return collection[nextNode];
}

function nodeAt(index, head, collection) {
  let node = collection[head];
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, head, collection) {
  let address = head;
  for (let i = 0; i < index; i++) {
    let node = nodeAt(i, head, collection);
    address = node.next;
  }
  return address;
}

function indexAt(node, collection, head) {
  let currentNode = collection[head];
  let index = 0;
  while (currentNode !== node) {
    index += 1;
    currentNode = collection[currentNode.next];
  }
  return index;
}

function insertNodeAt(index, next, head, collection) {
  let prevNode = nodeAt(index - 1, head, collection);
  let newNode = collection[next];
  newNode.next = prevNode.next;
  prevNode.next = next;
}

function deleteNodeAt(index, head, collection) {
  let deletedNode = nodeAt(index, head, collection);
  let prevNode = nodeAt(index - 1, head, collection);
  prevNode.next = deletedNode.next;
  deletedNode.next = '';
}
