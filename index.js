function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  let nextAddress = node.next;
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
  if (index === 0) {
    return linkedList;
  }

  let node = nodeAt(index - 1, linkedList, collection);
  return node.next;
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection);
  let index = 0;

  while (currentNode !== node) {
    index++;
    currentNode = next(currentNode, collection);
  }

  return index;
}

function insertNodeAt(index, nodeAddress, linkedList, collection) {
  // The node that is currently at the index we are inserting new node
  let original = nodeAt(index, linkedList, collection);
  // The node that is before the index we are inserting new node
  let prev = nodeAt(index - 1, linkedList, collection);
  // Make note of address of subsequent node, to point our new node to after insert
  let prevAddress = addressAt(prev, linkedList, collection);
  // Change address of prev node to new node address
  prev.next = nodeAddress;
  // Insert the new node
  let newNode = collection[nodeAddress];
  // Point new node to address of next node (node that was originally in its place)
  newNode.next = prevAddress;
}

function deleteNodeAt(index, linkedList, collection) {
  // Make note of address of subsequent node
  let newAddress = addressAt(index + 1, linkedList, collection);
  // Change address of node before the one that is being deleted
  let prev = nodeAt(index - 1, linkedList, collection);
  prev.next = newAddress;
}
