function getName(node) {
  return node.name;
}

function headNode(headAddress, collection) {
  return collection[headAddress];
}

function next(node, collection) {
  let nextAddress = node.next;
  return collection[nextAddress];
}

function nodeAt(index, headAddress, collection) {
  let node = headNode(headAddress, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, headAddress, collection) {
  let node = nodeAt(index, headAddress, collection);
  return Object.keys(collection).find(key => collection[key] === node);
}

function indexAt(targetNode, collection, headAddress) {
  let node = headNode(headAddress, collection);
  let i = 0;
  while (node !== targetNode) {
    node = next(node, collection);
    i++;
  }
  return i;
}

function insertNodeAt(index, newNodeAddress, headAddress, collection) {
  let previousNode = nodeAt(index - 1, headAddress, collection);
  let newNode = collection[newNodeAddress];
  newNode.next = previousNode.next;
  previousNode.next = newNodeAddress;
}

function deleteNodeAt(index, headAddress, collection) {
  let previousNode = nodeAt(index - 1, headAddress, collection);
  let node = next(previousNode, collection);
  previousNode.next = node.next;
}
