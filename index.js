function getName(node) {
  return node.name;
}

function headNode(head, collection) {
  return collection[head];
}

function next(head, collection) {
  return collection[head.next];
}

function nodeAt(index, head, collection) {
  let currentNode = headNode(head, collection);

  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection);
  }

  return currentNode;
}

function addressAt(index, head, collection) {
  let currentNode = headNode(head, collection);

  if (index === 0) { return head };

  let node = nodeAt(index - 1, head, collection);
  return node.next;
}

function indexAt(searchNode, collection, head) {
  let counter = 0;
  let currentNode = headNode(head, collection);

  while (searchNode !== currentNode) {
    currentNode = next(currentNode, collection);
    counter++;
  }

  return counter;
}

function insertNodeAt(index, location, head, collection) {
  let previousNode = nodeAt(index - 1, head, collection);
  let nextNode = nodeAt(index, head, collection);
  let nextNodeAddress = addressAt(nextNode, head, collection);

  previousNode.next = location;
  let newNode = collection[location];
  newNode.next = nextNodeAddress;
}

function deleteNodeAt(index, head, collection) {
  let currentNode = headNode(head, collection);
  let previousNode;
  for (let i = 0; i < index; i++) {
    previousNode = currentNode;
    currentNode = next(currentNode, collection);
  }

  previousNode.next = currentNode.next;
  delete collection[currentNode];
}
