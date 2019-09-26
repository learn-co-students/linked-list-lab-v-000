function getName(node) {
  return node.name
}

function headNode(head, collection) {
  return collection[head]
}

function next(node, collection) {
  let next = node.next
  return collection[next]
}

function nodeAt(index, head, collection) {
  let currentNode = collection[head]
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection)
  }
  return currentNode
}

function addressAt(index, head, collection) {
  return index === 0
    ? head
    : nodeAt(index - 1, head, collection).next
}

function indexAt(node, collection, head) {
  let index = 0
  let currentNode = collection[head]
  while (node != currentNode) {
    index++
    currentNode = next(currentNode, collection)
  }
  return index
}

function insertNodeAt(index, newNodeName, head, collection) {
  let previousNode = nodeAt(index - 1, head, collection)
  let afterNode = nodeAt(index, head, collection)
  let afterNodeIndex = indexAt(afterNode, collection, head)
  let afterNodeAddress = addressAt(afterNodeIndex, head, collection)
  previousNode.next = newNodeName
  collection[newNodeName].next = afterNodeAddress
}

function deleteNodeAt(index, head, collection) {
  let previousNode = nodeAt(index - 1, head, collection)
  let nodeToDelete = nodeAt(index, head, collection)

  previousNode.next = nodeToDelete.next
}
