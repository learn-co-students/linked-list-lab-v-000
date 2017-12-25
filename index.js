function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  return collection[node.next];
}

function nodeAt(index, linkedList, collection) {
  let currentIndex = 0;
  let currentNode = collection[linkedList];

  while (index !== currentIndex) {
    currentNode = next(currentNode, collection);
    currentIndex++;
  }

  return currentNode;
}

function addressAt(index, linkedList, collection) {
  const node = nodeAt(index, linkedList, collection);
  return Object.keys(collection).find(key => collection[key] === node);
}

function indexAt(node, collection, linkedList) {
  let index = 0;
  let currentNode = collection[linkedList];

  while (getName(currentNode) !== getName(node)) {
    currentNode = next(currentNode, collection);
    index++;
  }

  return index;
}

function insertNodeAt(index, newNode, linkedList, collection) {
  let node = nodeAt(index, linkedList, collection);
  let previous = nodeAt(index - 1, linkedList, collection);
  let previousNext = previous.next
  previous.next = newNode;
  collection[newNode].next = previousNext;
}

function deleteNodeAt(index, linkedList, collection) {
  let node = nodeAt(index, linkedList, collection);
  let previous = nodeAt(index - 1, linkedList, collection);
  let previousNext = node.next;
  node.next = "";
  previous.next = previousNext;
}