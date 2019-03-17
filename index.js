
const getName = (node) => {
  return node.name
}

const next = (node, collection) => {
  let nextAddress = node.next
  return collection[`${nextAddress}`]
}

const headNode = (linkedList, collection) => {
  return collection[linkedList]
}

const nodeAt = (index, linkedList, collection) => {
  let targetNode = headNode(linkedList, collection)
  for (let i = 0; i < index; i++) {
    targetNode = next(targetNode, collection)
  }
  return targetNode
}

const addressAt = (index, linkedList, collection) => {
  if (index == 0) {
    return linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    return node.next
  }
}

const indexAt = (node, collection, linkedList) => {
  let currentNode = headNode(linkedList, collection)
  let currentIndex = 0

  while (currentNode != node) {
    currentIndex++
    currentNode = next(currentNode, collection)
  }
  return currentIndex
}

const insertNodeAt = (index, newNodeAddress, linkedList, collection) => {
  let previousNode = nodeAt(index-1, linkedList, collection)
  let followingNode = nodeAt(index, linkedList, collection)

  let previousNodeIndex = indexAt(previousNode, collection, linkedList)
  let followingNodeIndex = indexAt(followingNode, collection, linkedList)
  let previousNodeAddress = addressAt(previousNode, linkedList, collection)
  let followingNodeAddress = addressAt(followingNode, linkedList, collection)

  previousNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = followingNodeAddress
}

const deleteNodeAt = (index, linkedList, collection) => {
  let previousNode
  let currentNode = headNode(linkedList, collection)

  for (let i = 0; i < index; i++) {
    previousNode = currentNode
    currentNode = next(currentNode, collection)
  }
  previousNode.next = currentNode.next
}
