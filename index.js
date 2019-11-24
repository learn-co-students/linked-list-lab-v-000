function getName(node){
  return node.name
}


function headNode(head, collection){
  return collection[head]
}

function next(node, collection) {
  let nextNode = node.next
  return collection[nextNode]
}

function nodeAt(index, list, collection) {
  let node = headNode(list, collection)
  for(let i=0; i < index; i++){
    node = next(node, collection)
  }
  return node
}

function addressAt(index, list, collection) {
  if (index === 0) {
    return list;
  } else {
    let node = nodeAt(index - 1, list, collection);
    return node.next;
  }
}

function indexAt(node, collection, list) {
  let currentNode = headNode(list, collection);
  let index = 0;
  while (currentNode != node) {
    index++;
    currentNode = next(currentNode, collection);
  }
  return index;
}

function insertNodeAt(index, address, list, collection) {
  let previousNode = nodeAt(index - 1, list, collection);
  let node = collection[address];

  node.next = previousNode.next;
  previousNode.next = address;
  return nodeAt(index, list, collection);
}

function deleteNodeAt(index, list, collection) {
  let previousNode = nodeAt(index - 1, list, collection);
  previousNode.next = addressAt(index + 1, list, collection);
  return nodeAt(index, list, collection);
}
