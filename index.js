function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(head, collection) {
  return collection[head.next]
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);
  for (let i = 0; i < index; i ++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList
  } else {
    return nodeAt(index - 1, linkedList, collection).next
  }
}

function indexAt(node, collection, linkedList) {
  if (collection[linkedList] === node) {
    return 0;
  } else {
    for (let i = 1; i < Object.keys(collection).length; i ++) {
      if (nodeAt(i, linkedList, collection) === node) {
        return i
      }
    }
  }
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  collection[newNodeAddress].next = previousNode.next;
  previousNode.next = newNodeAddress;
}

function deleteNodeAt(index, linkedList, collection) {
  let deletedNode = nodeAt(index, linkedList, collection);
  let previousNode = nodeAt(index - 1, linkedList, collection);
  previousNode.next = deletedNode.next;
}
