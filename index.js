function getName(node) {
  return node["name"]
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  let nextAddress = node["next"]
  return collection[nextAddress]
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection)
  for (let i=0; i<index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList
  } else {
    let precedingNode = nodeAt(index-1, linkedList, collection)
    return precedingNode["next"]
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = collection[linkedList]
  let index = 0
  if (currentNode === node) {
    return index
  } else {
    while (currentNode != node) {
      index++
      currentNode = next(currentNode, collection)
    }
    return index
  }
}

function insertNodeAt(index, newNode, linkedList, collection) {
  let prevNode ={};
  if (index === 0) {
    prevNode = collection[linkedList]
  } else {
    prevNode = nodeAt(index-1, linkedList, collection)
  }
  let prevNodeNext = prevNode["next"]
  prevNode["next"] = newNode
  collection[newNode]["next"] = prevNodeNext
}

function deleteNodeAt(index, linkedList, collection) {
  let nodeToBeDeleted = nodeAt(index, linkedList, collection)
  if (index === 0) {
    head = collection[linkedList]
    head["next"] = ""
    linkedList = collection[linkedList]["next"]
  } else {
    let prevNode = nodeAt(index-1, linkedList, collection)
    prevNode["next"] = nodeToBeDeleted["next"]
  }
}
