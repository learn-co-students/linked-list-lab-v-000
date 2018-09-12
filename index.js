function getName(node) {
  return node['name']
}

function headNode(list, coll) {
  return coll[list]
}

function next(head, coll){
  let nextNode = head.next
  return coll[nextNode]
}

function nodeAt(index, list, coll) {
  let node = coll[list]
  for (let i = 0; i < index; i++) {
    node = next(node, coll)
  }
  return node
}

function addressAt(index, list, coll) {
  if (index === 0) {
    return list
  } else {
    let node = nodeAt(index-1, list, coll)
    return node.next
  }
}

function indexAt(node, coll, list){
  let currentIndex = 0
  let currentNode = headNode(list,coll)
  while(currentNode != node){
    currentIndex++
    currentNode = next(currentNode, coll)
  }
  return currentIndex
}

function insertNodeAt(index, node, list, coll){
  let prevNode = nodeAt(index-1, list, coll)
  let prevIndex = indexAt(prevNode, coll, list)
  let prevAddress = addressAt(prevNode, list, coll)
  let nextNode = nodeAt(index, list, coll)
  let nextIndex = indexAt(nextNode, coll, list)
  let nextAddress = addressAt(nextNode, list, coll)

  prevNode.next = node
  let newNode = coll[node]
  newNode.next = nextAddress
}

function deleteNodeAt(index, list, coll){
  let previousNode
  let currentNode = headNode(list, coll)
  for(let i = 0; i < index; i++) {
    previousNode = currentNode
    currentNode = next(currentNode, coll)
  }
  previousNode.next = currentNode.next
}
