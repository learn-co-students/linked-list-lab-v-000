function getName(node){
  return node.name

}

function headNode(head, collection){
  return collection[head]
}


function next(head, collection){
  return collection[head.next]
}

function nodeAt(index, node, collection){
  let newNode = headNode(node,collection)
  for(let i = 0; i<index; i++){
    newNode = next(newNode, collection)
  }
  return newNode
}

function addressAt(index, head, collection){
  if(index>0){
    let previous = nodeAt(index-1, head, collection)
    return previous.next
  }else{
    return head
  }
}

function indexAt(node, collection, head){
  let i = 0
  let newNode = headNode(head, collection)
  while(node !== newNode){
    newNode= next(newNode, collection)
    i++
  }
  return i

}

function insertNodeAt(index, newNode, head, collection){

  let currentNode = nodeAt(index, head, collection)
  let previousNode = nodeAt(index-1, head, collection)
  let location = previousNode.next
  previousNode.next = newNode
  headNode(newNode,collection).next = location
}

function deleteNodeAt(index, head, collection){
  let currentNode = nodeAt(index, head, collection)
  let previousNode = nodeAt(index-1, head, collection)
  previousNode.next = currentNode.next
}
