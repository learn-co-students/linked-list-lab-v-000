function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(head, collection) {
  let nextAddress = head.next;
  return collection[nextAddress];
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);
  for( let i = 0; i < index; i++){
     node = next(node, collection);
  }
  return node;
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList;
  } else {
    let node = nodeAt(index - 1, linkedList, collection);
    return node.next;
  }
}

function indexAt(node, collection, linkedList) {
  let currentIndex = 0,
      currentNode = headNode(linkedList, collection);
  while(currentNode !== node) {
    currentIndex++;
    currentNode = next(currentNode, collection);
  }
  return currentIndex;
}

function insertNodeAt(index, address, linkedList, collection) {
  let followingNode = nodeAt(index, linkedList, collection),
      previousNode = nodeAt(index - 1, linkedList, collection),
      followingNodeAddress = addressAt(followingNode, linkedList, collection),
      newNode = collection[address];
  previousNode.next = address;
  newNode.next = followingNodeAddress;
}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection),
      followingNodeAddress = addressAt(index + 1, linkedList, collection);
  previousNode.next = followingNodeAddress;
}
