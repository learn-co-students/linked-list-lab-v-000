function getName(node) {
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
  if(index == 0){
    return linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    return node.next
  }
}

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection);
  let currentIdx = 0
  while(currentNode != node){
    currentIdx++
    currentNode = next(currentNode, collection)
  }
  return currentIdx
}