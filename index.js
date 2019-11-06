function getName(node) {
  return node.name;
}

function next(head, collection) {
  let node = head;
  let nextAddress = node.next;
  return collection[nextAddress];
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);
  //let head = node;

  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }

  return node;
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList;
  } else {
    let previousNode = nodeAt(index - 1, linkedList, collection);
    return previousNode.next;
  }
}

function indexAt(node, collection, linkedList) {
  let head = headNode(linkedList, collection);
  let index = 0;

  if (node === head) {
    return index;
  } else {
    let nextNode = next(node, collection);
    while (node !== nextNode) {
      node = next(node, collection);
      index++;
    }
    return index;
  }
}

function insertNodeAt(index, address, linkedList, collection) {
  let head = headNode(linkedList, collection);
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let newNode = collection[address];

  newNode.next = previousNode.next;
  previousNode.next = address;
  return nodeAt(index, linkedList, collection);
}

function deleteNodeAt(index, linkedList, collection) {
  let head = headNode(linkedList, collection);
  let node = nodeAt(index, linkedList, collection);
  let previousNode = nodeAt(index - 1, linkedList, collection);

  previousNode.next = addressAt(index + 1, linkedList, collection);
  return nodeAt(index, linkedList, collection);
}
