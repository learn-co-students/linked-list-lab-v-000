function getName(node){
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

// function nodeAt(position, linkedList, collection) {
//   let referenceNode = collection[linkedList]
//   let newNode
//   for (let i = 0; i < position; i++) {
//     newNode = collection[referenceNode.next]
//     referenceNode = newNode
//   }
//   return newNode
//
// }

function nodeAt(index, linkedList, collection){
  let currentNode = headNode(linkedList, collection)
  for(let i = 0; i < index; i++){
     currentNode = next(currentNode, collection)
  }
  return currentNode
}

// function addressAt(index, linkedList, collection) {
//   let referenceNode = nodeAt(index-1,linkedList, collection)
//   return referenceNode.next
// }

function addressAt(index, linkedList, collection){
  if(index == 0){
    return linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    return node.next
  }
}
//
// function indexAt(node, linkedList, collection){
//   let currentNode = headNode(linkedList, collection)
//   let index = 0
//   let newNode
//   while (currentNode !== node) {
//     newNode = next(currentNode)
//     currentNode = newNode
//     index += 1
//   }
//   return index
// }

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection);
  let currentIdx = 0
  while(currentNode != node){
    currentIdx++
    currentNode = next(currentNode, collection)
  }
  return currentIdx
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
  let previousNode = nodeAt(index - 1, linkedList, collection)
  let subsequentNode = nodeAt(index, linkedList, collection)

  let previousNodeIdx = indexAt(previousNode, collection, linkedList)
  let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)
  let previousNodeAddress = addressAt(previousNode, linkedList, collection)
  let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
  previousNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = subsequentNodeAddress
}

function deleteNodeAt(index, linkedList, collection){
  let previousNode;
  let currentNode = headNode(linkedList, collection);
  for(let i = 0; i < index; i++){
     previousNode = currentNode
     currentNode = next(currentNode, collection);
  }
  // TN: this effectively tells the linked list to skip over the currentNode
  previousNode.next = currentNode.next
}
