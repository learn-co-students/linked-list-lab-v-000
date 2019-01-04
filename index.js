function getName(node){
  return node.name
}

function headNode(head, collection){
  return collection[head]
}

function next(node, collection){
  let nextAddress = node.next
  return collection[`${nextAddress}`]
}

function nodeAt(index, head, collection){
  let node = headNode(head, collection)
  for(let i = 0; i<index; i++){
    node = next(node, collection)
  }
  return node
}

function addressAt(index, address, collection){
  if(index == 0){
    return address
  }else{
    let node = nodeAt(index-1, address, collection)
    return node.next
  }
}

function indexAt(node, collection, head){
  let count = 0
  let currentNode = collection[head]
  while(node !== currentNode){
    currentNode = next(currentNode, collection)
    count++
  }
  return count
}

function insertNodeAt(index, address, head, collection){
  let prevNode = nodeAt(index-1, head, collection)
  collection[address].next = prevNode.next
  prevNode.next = address
}

function deleteNodeAt(index, head, collection){
  let prevNode = nodeAt(index-1, head, collection)
  let oldNode = nodeAt(index, head, collection)

  prevNode.next = oldNode.next
}
