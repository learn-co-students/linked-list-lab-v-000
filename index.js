function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(head, collection) {
  return collection[head.next];
}

function nodeAt(index, linkedList, collection) {
  let node = collection[linkedList];
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  };
  return node;
}

function addressAt(index, linkedList, collection) {
  return index === 0 ? linkedList : nodeAt(index - 1, linkedList, collection).next;
}

function indexAt(node, collection, linkedList) {
  let currentNode = collection[linkedList];
  let i = 0;
  while (node !== currentNode) {
    i++;
    currentNode = next(currentNode, collection);
  };
  return i;
}

function insertNodeAt(index, newNode, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let nextNodeAddress = addressAt(index, linkedList, collection);

  previousNode.next = newNode;
  collection[newNode].next = nextNodeAddress;
}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let nextNodeAddress = addressAt(index + 1, linkedList, collection);
  previousNode.next = nextNodeAddress;
}
