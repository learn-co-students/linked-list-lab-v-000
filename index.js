function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(head, collection) {
  let nextNode = head.next
  return collection[nextNode]
}

function nodeAt(pos, linkedList, collection) {
  let node = collection[linkedList]
  for (let i = 0; i < pos; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(pos, linkedList, collection) {
  let node = linkedList
  for (let i = 0; i < pos; i++) {
    node = collection[node].next
  }
  return node
}

function indexAt(nodeName, collection, linkedList) {
  let node = collection[linkedList]
  for (let i = 0; i < Object.keys(collection).length; i++) {
    if (node === nodeName) {
      return i
    } else {
      node = next(node, collection)
    }
  }
}

function insertNodeAt(pos, newNode, linkedList, collection) {
  let prevNode
  if (pos === 0) {
    prevNode = collection[linkedList];
  } else {
    prevNode = nodeAt(pos-1, linkedList, collection);
  }
  let prevNodeNext = prevNode.next
  prevNode.next = newNode
  collection[newNode].next = prevNodeNext
}

function deleteNodeAt(pos, linkedList, collection) {
  let prevNode;
  let currentNode = collection[linkedList]
  for (let i = 0; i < pos; i++) {
    prevNode = currentNode
    currentNode = next(currentNode, collection)
  }
  prevNode.next = currentNode.next
}
