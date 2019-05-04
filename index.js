function getName(node) {
  return Object.values(node)[0];
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(head, collection) {
  return collection[head.next];
}

function nodeAt(index,linkedList, collection) {
  let currentNode = headNode(linkedList, collection);

  for (let i=0; i < index ; i++) {
    currentNode = next(currentNode, collection);
  }
  return currentNode;
}

function addressAt(index, linkedList, collection) {
  const currentNode = nodeAt(index, linkedList, collection)
  return findKeybyValue(collection, currentNode);
}

function findKeybyValue(collection, value) {
  return Object.keys(collection).find(key => collection[key] === value);
}

function indexAt(node, collection, linkedList) {
  let i =0;
  let currentNode = headNode(linkedList, collection);
  while (node !== currentNode) {
    currentNode = next(currentNode, collection);
    i++;
  }
  return i;
}

function insertNodeAt(index, newAddress, linkedList, collection) {
  const newNode = collection[newAddress];
  newNode.next = addressAt(index, linkedList, collection);
  const previousNode = nodeAt(index - 1, linkedList, collection)
  previousNode.next = newAddress;
}

function deleteNodeAt(index, linkedList, collection) {
  const nodeToDelete = nodeAt(index, linkedList, collection);
  const nextNode = nodeAt(index + 1, linkedList, collection);
  const previousNode = nodeAt(index - 1, linkedList, collection);
  delete collection[previousNode.next];
  previousNode.next = findKeybyValue(collection, nextNode);
}
