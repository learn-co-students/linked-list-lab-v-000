function getName(node){
  return node["name"];
}

function headNode(linkedList, collection){
  return collection[linkedList];
}

function next(head, collection){
  return collection[head["next"]]
}

function nodeAt(index, linkedList, collection){
  let currentNode = headNode(linkedList, collection)
  for( let i = 0; i < index; i++) {
   currentNode = next(currentNode, collection)
  }
  return currentNode
  
}

function addressAt(index, linkedList, collection){
  if (index == 0) {
    return linkedList
  } else {
    let node = nodeAt(index - 1, linkedList, collection)
    return node["next"]
  }
}

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection)
  let currentIndex = 0;
  while (currentNode != node) {
    currentIndex++;
    currentNode = next(currentNode, collection)
  }
  return currentIndex;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
  // find the previous and the next nodes
 let previousNode = nodeAt(index - 1, linkedList, collection) 
 let nextNode = nodeAt(index + 1, linkedList, collection)
 
 // find the indeces of previous and next node
 let previousNodeIndex = indexAt(previousNode, collection, linkedList)
 let nextNodeIndex = indexAt(nextNode, collection, linkedList)
 
 // find the addresses of previous and next node
 let previousNodeAddress = addressAt(previousNodeIndex, linkedList, collection)
 let nextNodeAddress = addressAt(nextNodeAddress, linkedList, collection)
 
 previousNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = nextNodeAddress
 
}

function deleteNodeAt(deleteIndex, linkedList, collection) {
  // find the previous and the next nodes
  let previousNode = nodeAt(deleteIndex - 1, linkedList, collection) 
  let currentNode = nodeAt(deleteIndex, linkedList,collection)
 
  // set address of previous node to the node next to current node
  previousNode.next = currentNode.next
  // remove current node from the list
}