function getName(node) {
  return node.name
}

function headNode(address, collection) {
  return collection[address]
}

function next(start, collection) {
  let nextAddress = start.next
  return collection[nextAddress]
}

function nodeAt(index, startAddress, collection) {
  let node = collection[startAddress];
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection){
  if(index == 0){
    return linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    return node.next
  }
}

function indexAt(node, collection, startAddress) {
  let currentNode = headNode(startAddress, collection);
  let currentIndex = 0
  while (currentNode != node) {
    currentIndex += 1
    currentNode = next(currentNode, collection)
  }
  return currentIndex
}

function insertNodeAt(index, newNodeAddress, startAddress, collection) {
  let previousNode = nodeAt((index-1), startAddress, collection)
  let subsequentNode = nodeAt(index, startAddress, collection)
  let subsequentNodeAddress = addressAt(subsequentNode, startAddress, collection)
  previousNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = subsequentNodeAddress
}

function deleteNodeAt(index, startAddress, collection) {
  let previousNode = nodeAt((index-1), startAddress, collection)
  let deletedNode = nodeAt(index, startAddress, collection)
  previousNode.next = deletedNode.next
}
