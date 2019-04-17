function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(num, linkedList, collection) {
  let node = collection[linkedList]
  for (let i = 0; i < num; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(num, linkedList, collection) {
  let node = nodeAt(num - 1, linkedList, collection)
  if (num == 0) {
    return linkedList
  } else {
    return node.next
  }
}

function indexAt(node, collection, linkedList) {
  let selectedNode
  for (let i = 0; i < Object.keys(collection).length; i++) {
    if (nodeAt(i, linkedList, collection) === node) {
      selectedNode = i
    }
  }
  return selectedNode
}

function insertNodeAt(num, newNode, linkedList, collection) {
  let node = headNode(newNode, collection)
  let prevNode = nodeAt(num - 1, linkedList, collection)
  let nextAddress = addressAt(num, linkedList, collection)
  prevNode.next = newNode
  node.next = nextAddress
}

function deleteNodeAt(num, linkedList, collection) {
  let prevNode = nodeAt(num - 1, linkedList, collection)
  let nextAddress = addressAt(num + 1, linkedList, collection)
  prevNode.next = nextAddress
}
