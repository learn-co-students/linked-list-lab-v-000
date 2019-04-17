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

function indexAt() {

}
