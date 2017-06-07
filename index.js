function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, head, collection) {
  let node = collection[head]
  for (var i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, head, collection) {
  let address = head
  for (var i = 0; i < index; i++) {
    address = collection[address].next
  }
  return address
}

function indexAt(node, collection, head) {
  let index = 0
  let currentNode = collection[head]
  while (currentNode !== node) {
    currentNode = collection[currentNode.next]
    index ++
  }
  return index
}

function insertNodeAt(index, newAddress, head, collection) {
  let previous = nodeAt(index - 1, head, collection)
  let next = previous.next
  previous.next = newAddress
  collection[newAddress].next = next
}

function deleteNodeAt(index, head, collection) {
  let previous = nodeAt(index - 1, head, collection)
  let next = addressAt(index + 1, head, collection)
  previous.next = next 
}
