let getName = (node) => {
  return node['name']
}

let headNode = (linkedList, collection) => {
  return collection[linkedList]
}

let next = (node, collection) => {
  let nextAddress = node['next']
  return collection[nextAddress]
}

let nodeAt = (index, linkedList, collection) => {
  let node = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

let addressAt = (index, linkedList, collection) => {
  if (index > 0) {
    let node = nodeAt(index - 1, linkedList, collection)
    return node['next']
  } else {
    return linkedList
  }
}

let indexAt = (node, collection, linkedList) => {
  let currentNode = headNode(linkedList, collection);
  let counter = 0;
  if (currentNode != node) {
    counter++
    currentNode = next(currentNode, collection)
  }
  return counter
}

let insertNodeAt = (index, address, linkedList, collection) => {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let futureAddress = previousNode['next']
  previousNode['next'] = address;
  let newNode = next(previousNode, collection);
  newNode['next'] = futureAddress
}

let deleteNodeAt = (index, linkedList, collection) => {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let currentNode = nodeAt(index, linkedList, collection);
  let nextNodeAddress = currentNode['next'];
  previousNode['next'] = nextNodeAddress
}
