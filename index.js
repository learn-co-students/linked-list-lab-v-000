function getName(node){
  return node.name
}

function headNode(linkedList, collection){
  return collection[linkedList]
}


function next(node, collection){
  let nextAddress = node.next
  return collection[`${nextAddress}`]
}

function nodeAt(index, linkedList, collection){
  let currentNode = headNode(linkedList, collection);
  for(let i = 0; i < index; i++){
     currentNode = next(currentNode, collection);
  }

  return currentNode;
}

function addressAt(index, linkedList, collection){
  if(index === 0){
    return linkedList
  }else{
    let nodeBefore = nodeAt(index-1, linkedList, collection)
    return nodeBefore.next
  }
}

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection);
  let counter = 0;
  while(currentNode !== node){
    counter++
    currentNode = next(currentNode, collection)
  }
  return counter
}

function insertNodeAt(newNodeIndex, newNodeAddress, linkedList, collection){
  let nodeBeforeNew = nodeAt(newNodeIndex-1, linkedList, collection)
  let nodwAfterNew = nodeAt(newNodeIndex, linkedList, collection)

  let nodeBeforeNewIndex = indexAt(nodeBeforeNew, collection, linkedList)
  let nodeAfterNewIndex = indexAt(nodeAfterNew, collection, linkedList)
  let nodeBeforeNewAddress = addressAt(nodeBeforeNew, linkedList, collection)
  let nodeAfterNewAddress = addressAt(nodeAfterNew, linkedList, collection)
  nodeBeforeNew.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = nodeAfterNewAddress

}