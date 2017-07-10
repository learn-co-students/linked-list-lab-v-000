function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  let nextAddress = node.next
  return collection[nextAddress];
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);

  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, linkedList, collection) {
  let node = collection[linkedList];

  return index ==  0 ? linkedList : addressAt(index  - 1, node.next, collection);
}

function indexAt(node, collection, linkedList) {
  return node == collection[linkedList] ? 0 : 1 + indexAt(node, collection, collection[linkedList].next)
}

function insertNodeAt(index, address, linkedList, collection) {
  let previousOfNewNode = nodeAt(index - 1, linkedList, collection),
      nextOfNewNode = addressAt(index, linkedList, collection),
      newNode = collection[address];
  previousOfNewNode.next = address;
  newNode.next = nextOfNewNode;
}

function deleteNodeAt(index, linkedList, collection) {
  let previousOfDeletedNode = nodeAt(index - 1, linkedList, collection),
      nextOfDeletedNode = addressAt(index + 1, linkedList, collection);
  previousOfDeletedNode.next = nextOfDeletedNode;
}
