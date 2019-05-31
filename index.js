function getName(node) { return node.name }

function headNode(linkedList, collection) { return collection[linkedList] }

function next(node, collection) { return collection[node.next] }

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);

  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }

  return node;
}

function addressAt(index, linkedList, collection) {
  if (index === 0) return linkedList;

  return nodeAt(index-1, linkedList, collection).next;
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection);
  let index = 0;

  while (node != currentNode) {
    index++;
    currentNode = next(currentNode, collection);
  }

  return index;
}

function insertNodeAt(index, address, linkedList, collection) {
  const beforeNode = nodeAt(index-1, linkedList, collection);
  const node = collection[address];
  const afterNodeAddress = beforeNode.next;

  beforeNode.next = address;
  node.next = afterNodeAddress;
}

function deleteNodeAt(index, linkedList, collection) {
  const beforeNode = nodeAt(index-1, linkedList, collection);
  const afterNodeAddress = nodeAt(index, linkedList, collection).next;

  beforeNode.next = afterNodeAddress;
}
