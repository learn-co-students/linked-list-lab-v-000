function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
  let node = collection[linkedList]
  for (let i=0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection) {
  let address = linkedList;
  let currentNode = collection[linkedList]
  for (let i=0; i < index; i++) {
    address = currentNode.next
    currentNode = next(currentNode, collection)
  }
  return address
}

function indexAt(node, collection, linkedList) {
  let currentNode = collection[linkedList];
  let i = 0;
    if (node !== currentNode) {
      currentNode = next(currentNode, collection)
      i++
    }
    return i
}

function insertNodeAt(index, newLink, linkedList, collection) {
  const newNode = collection[newLink]
  const nextAddress = addressAt(index, linkedList, collection)
  newNode.next = nextAddress
  const previousNode = nodeAt(index - 1, linkedList, collection)
  previousNode.next = newLink
}

function deleteNodeAt(index, linkedList, collection) {
  const previousNode = nodeAt(index - 1, linkedList, collection)
  const nextAddress = addressAt(index + 1, linkedList, collection)
  previousNode.next = nextAddress
}
