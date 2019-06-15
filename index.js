
function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  let next = node.next;
  return collection[`${next}`];
}

function nodeAt(idx, linkedList, collection) {
  let node = headNode(linkedList, collection);
  for (let i=0; i<idx; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(idx, linkedList, collection) {
  if (idx === 0) {
    return linkedList;
  } else {
    let node = nodeAt(idx -1, linkedList, collection);
    return node.next;
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection);
  let index = 0;
  while (currentNode !== node) {
      index++;
      currentNode = next(currentNode, collection);
  }
  return index;
}

function insertNodeAt(idx, address, linkedList, collection) {
  let previousNode = nodeAt(idx-1, linkedList, collection);
  let nextNode = nodeAt(idx, linkedList, collection);
  
  let previousNodeIdx = indexAt(previousNode, collection, linkedList);
  let nextNodeIdx = indexAt(nextNode, collection, linkedList);
  
  let prevNodeAddress = addressAt(previousNodeIdx, linkedList, collection);
  let nextNodeAddress = addressAt(nextNodeIdx, linkedList, collection);
  
  previousNode.next = address;
  let newNode = collection[address];
  newNode.next = nextNodeAddress;
}

function deleteNodeAt(idx, linkedList, collection) {
  let previousNode = nodeAt(idx-1, linkedList, collection);
  
  let nextNodeAddress = addressAt(idx + 1, linkedList, collection);
  previousNode.next = nextNodeAddress;
}