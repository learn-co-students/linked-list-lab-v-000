function getName(node) {
  return node.name;
}

function headNode(headAddress, collection) {
  return collection[headAddress];
}

function next(node, collection) {
  return collection[node.next];
}

function nodeAt(index, headAddress, collection) {
  let node = headNode(headAddress, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, headAddress, collection) {
  let address = headAddress;
  let node;
  for (let i = 0; i < index; i++) {
    address = collection[address].next;
  }
  return address;
}

function indexAt(node, collection, headAddress) {
  let nextNode = headNode(headAddress, collection);
  let counter = 0;
  while (typeof nextNode !== 'undefined') {
    if (nextNode.name === node.name) return counter;
    counter += 1;
    nextNode = next(nextNode, collection);
  }
}

function insertNodeAt(index, nodeAddress, headAddress, collection) {
  const preNode = nodeAt(index - 1, headAddress, collection);
  const newNode = collection[nodeAddress];
  const nextAddress = addressAt(index, headAddress, collection);
  if (typeof preNode !== 'undefined') preNode.next = nodeAddress;
  if (typeof newNode !== 'undefined') newNode.next = nextAddress;
}

function deleteNodeAt(index, headAddress, collection) {
  const preNode = nodeAt(index - 1, headAddress, collection);
  const skipAddress = nodeAt(index, headAddress, collection).next;
  if (typeof preNode !== 'undefined') preNode.next = skipAddress;
}
