
function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  let nextAddress = node.next
  return collection[nextAddress]
}

function nodeAt(index, linkedList, collection) {
  let currentNode = headNode(linkedList, collection)
  for (let counter = 0; counter < index; counter++) {
    currentNode = next(currentNode, collection)
  }
  return currentNode
}


function addressAt(index, linkedList, collection) {
  if (index == 0) {
    return linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    return node.next
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection)
  let currentIndex = 0
  while(currentNode != node) {
    currentIndex++
    currentNode = next(currentNode, collection)
  }
  return currentIndex
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection)
  let subsequentNode = nodeAt(index, linkedList, collection)

  let previousNodeIndex = indexAt(previousNode, collection, linkedList)
  let subsequentNodeIndex = indexAt(subsequentNode, collection, linkedList)

  let previousNodeAddress = addressAt(previousNode, linkedList, collection)
  let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)

  previousNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = subsequentNodeAddress
}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode
  let currentNode = headNode(linkedList, collection)
  for (let counter = 0; counter < index; counter++) {
    previousNode = currentNode
    currentNode = next(currentNode, collection)
  }
  previousNode.next = currentNode.next
}
