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
