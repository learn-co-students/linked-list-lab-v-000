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
    node = next(node, collection)
  }

  return node;
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList;
  } else {
    let prevNode = nodeAt(index - 1, linkedList, collection)
    return prevNode.next;
  }
}

function indexAt(node, collection, linkedList) {
  let i = 0;
  let testNode = headNode(linkedList, collection);

  while (testNode !== node) {
    i++;
    testNode = next(testNode, collection)
  }

  return i;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {

  let prevNode = nodeAt(index - 1, linkedList, collection);
  let nextNode = nodeAt(index, linkedList, collection);
  let nextAddress = prevNode.next;

  prevNode.next = newNodeAddress;
  let newNode = collection[newNodeAddress]
  newNode.next = nextAddress;
}

function deleteNodeAt(index, linkedList, collection) {
  let prevNode = nodeAt(index -1, linkedList, collection);
  let deleteNode = nodeAt(index, linkedList, collection)
  let nextNode = nodeAt(index+1, linkedList, collection);

  prevNode.next = deleteNode.next;
}
