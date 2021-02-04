function getName(node) {
  return node.name;
}

function headNode(link, collection) {
  return collection[link];
}

function next(node, collection) {
  return collection[node.next];
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
  return nodeAt(index - 1, linkedList, collection).next;
}

function indexAt(node, collection, linkedList) {
  let index = 0;
  while (nodeAt(index, linkedList, collection) !== node) {
    index++;
  }
  return index;
}

function insertNodeAt(index, link, linkedList, collection) {
  const newNode = collection[link];
  const prevNode = index > 0 ? nodeAt(index - 1, linkedList, collection) : null;
  const nextAddress = addressAt(index, linkedList, collection);
  
  newNode.next = nextAddress;
  if (prevNode) {
    prevNode.next = link;
  }
}

function deleteNodeAt(index, linkedList, collection) {
  const deleteNode = nodeAt(index, linkedList, collection);
  const prevNode = index > 0 ? nodeAt(index - 1, linkedList, collection) : null;
  const nextAddress = addressAt(index + 1, linkedList, collection) || null;
  
  if (prevNode) {
    prevNode.next = nextAddress;
  }
}