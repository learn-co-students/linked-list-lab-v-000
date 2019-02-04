function getName(node) {
  return node.name
}

function headNode(address, collection) {
  return collection[address]
}

function next(start, collection) {
  let nextAddress = start.next
  return collection[nextAddress]
}

function nodeAt(index, startAddress, collection) {
  let node = collection[startAddress];
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}
