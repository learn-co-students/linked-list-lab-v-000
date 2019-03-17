
function getName(node) {
  return (node["name"]);
}

function headNode(linkedList, collection) {
  return (collection[linkedList]);
}

function next(node, collection) {
  let nextAddress = node["next"];
  return (collection[nextAddress]);
}

function nodeAt(index, linkedList, collection) {
  let node = collection[linkedList];
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, linkedList, collection) {
  if (index == 0) {
    return linkedList;
  }
  else {
    let node = nodeAt(index - 1, linkedList, collection);
    return node.next;
  }
}

function indexAt(node, collection, linkedList) {
  let testNode = headNode(linkedList, collection);
  let i = 0;
  while (testNode != node){
    testNode = next(testNode, collection);
    i++;
  }
  return i;
}

function insertNodeAt(index, newAddress, linkedList, collection) {
  let prevNode = nodeAt(index - 1, linkedList, collection);
  let nextNode = nodeAt(index, linkedList, collection);

  let prevNodeInd = indexAt(prevNode, collection, linkedList);
  let nextNodeInd = indexAt(nextNode, collection, linkedList);

  let prevNodeAdd = addressAt(prevNode, linkedList, collection);
  let nextNodeAdd = addressAt(nextNode, linkedList, collection);

  prevNode.next = newAddress;
  let newNode = collection[newAddress];
  newNode.next = nextNodeAdd;
}

function deleteNodeAt(index, linkedList, collection) {
  let prevNode = nodeAt(index - 1, linkedList, collection);
  let curNode = nodeAt(index, linkedList, collection);
  prevNode.next = curNode.next;
}
