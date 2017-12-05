function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  return collection[node.next];
}

function nodeAt(idx, linkedList, collection) {
  let node = collection[linkedList]
  while (!!idx) {
    node = next(node, collection);
    idx--;
  }
  return node;
}

function addressAt(idx, linkedList, collection) {
  return !!idx ? nodeAt(idx - 1, linkedList, collection)['next'] : linkedList
}

function indexAt(targetNode, collection, linkedList) {
  let node = collection[linkedList]
  let idx = 0;
  while (!!node) {
    if (node === targetNode) {
      return idx;
    } else {
      node = next(node, collection);
      idx++;
    }
  }
}

function insertNodeAt(idx, address, linkedList, collection) {
  let prevNode = nodeAt(idx - 1, linkedList, collection);
  collection[address].next = prevNode.next;
  prevNode.next = address;
}

function deleteNodeAt(idx, linkedList, collection) {
  let prevNode = nodeAt(idx - 1, linkedList, collection);
  let nodeAtIdx = collection[prevNode.next];
  prevNode.next = nodeAtIdx.next;
}
