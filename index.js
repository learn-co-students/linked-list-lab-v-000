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
  let node = collection[linkedList];
  for (let i=0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection) {
  let node = collection[linkedList];
  if (index === 0) {
    return linkedList
  } else {
    for (let i=0; i<(index-1); i++) {
      node = next(node, collection)
    }
    return node.next
  }
}

let index = 0;
function indexAt(node, collection, linkedList) {
  if (node === nodeAt(index, linkedList,collection)) {
    return index
  } else {
    index ++
    return indexAt(node, collection, linkedList)
  }
}

function insertNodeAt(index, address, linkedList, collection) {
  let node = nodeAt(index-1, linkedList, collection);
  let newNode = collection[address];
  newNode.next = node.next;
  node.next = address;
}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode = nodeAt(index-1, linkedList, collection);
  let deletedNode = nodeAt(index, linkedList, collection);
  previousNode.next = deletedNode.next;
}
