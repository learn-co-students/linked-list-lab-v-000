
const getName = (node) => {
  return node.name
}

const next = (node, collection) => {
  let nextAddress = node.next
  return collection[`${nextAddress}`]
}

const headNode = (linkedList, collection) => {
  return collection[linkedList]
}

const nodeAt = (index, linkedList, collection) => {
  let targetNode = headNode(linkedList, collection)
  for (let i = 0; i < index; i++) {
    targetNode = next(targetNode, collection)
  }
  return targetNode
}
