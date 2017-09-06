function getName(node) {
  return node.name
}

function headNode(head, collection) {
  return collection[head]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, head, collection) {
  let node = collection[head]
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, head, collection) {
  if (index > 0) {
    return nodeAt(index - 1, head, collection).next
  }
  return head
}

function indexAt(node, collection, head) {
  let counter = 0
  let currentNode = collection[head]
  if (node !== currentNode) {
    currentNode = collection[currentNode.next]
    counter++
  }
  return counter
}

function insertNodeAt(index, newNode, head, collection) {
  if (index > 0) {
    let previousNode = nodeAt(index - 1, head, collection)
    collection[newNode].next = previousNode.next
    previousNode.next = newNode
  } else {
    collection[newNode].next = addressAt(index, head, collection)
  }
}

function deleteNode(index, head, collection) {
  if (index > 0) {
    let previousNode = nodeAt(index - 1, head, collection)
    previousNode.next = next(previousNode, collection)
  } else {
    head = nodeAt(index + 1, head, collection)
  }
}
