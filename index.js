const getName = (node) => {
  return node.name
}

const headNode = (linkedList, collection) => {
  return collection[linkedList]
}

function next(head, collection){
  const key = head.next
  return collection[key]
}

function nodeAt(index, linkedList, collection){
  let currentIndex = 0
  let node = headNode(linkedList, collection);
  while (currentIndex < index) {
    node = next(node, collection)
    currentIndex++
  }
  return node
}

function addressAt(index, linkedList, collection){
  let currentIndex = 0;
  let address = linkedList
  while (currentIndex < index){
    address = collection[linkedList].next
    currentIndex++
  }
  return address
}

function indexAt(node, collection, linkedList){
  let currentIndex = 0
  let currentNode = headNode(linkedList, collection)
  while (true) {
    if (currentNode === node){
      return currentIndex
    }
    else {
      currentNode = next(currentNode, collection)
      currentIndex++
    }
  }
}

function insertNodeAt(index, newAddress, linkedList, collection){
  const previousNode = nodeAt(index - 1, linkedList, collection)
  const nextAddress = previousNode.next
  const newNode = collection[newAddress]
  previousNode.next = newAddress
  newNode.next = nextAddress
}

function deleteNodeAt(index, linkedList, collection) {
  const previousNode = nodeAt(index - 1, linkedList, collection);
  const deletedNode = nodeAt(index, linkedList, collection)
  previousNode.next = deletedNode.next
}