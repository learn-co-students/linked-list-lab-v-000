function getName (node) {
  return node.name;
}

function headNode (linkedList, collection) {
  let head = collection[linkedList]

  return head;
}

function next (head, collection) {
  let nextNode = collection[head.next]

  return nextNode;
}

function nodeAt (index, linkedList, collection) {
  let node = collection[linkedList]

  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }

  return node;
}

function addressAt (index, linkedList, collection) {
  let head = collection[linkedList]

  if (index === 0) {

    return linkedList
  } else if (index === 1) {

    return head.next
  } else if (index > 1) {
    let node = nodeAt(index - 1, linkedList, collection)

    return node.next
  }
}

function indexAt (findThisNode, collection, linkedList) {
  let i = 0
  let node = collection[linkedList]

  while (node !== findThisNode) {
    node = next(node, collection)
    i++
  }

  return i
}

function insertNodeAt (index, name, linkedList, collection) {
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let newNode = collection[name]

  newNode.next = prevNode.next
  prevNode.next = name
}

function deleteNodeAt (index, linkedList, collection) {
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let deleteNode = next(prevNode, collection)

  prevNode.next = deleteNode.next
}
