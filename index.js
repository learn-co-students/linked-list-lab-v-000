function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
   return collection[linkedList]
}

function next(head, collection) {
  return collection[head.next];
}

function nodeAt(n, linkedList, collection) {
  var node = headNode(linkedList, collection);
  for (let i=0; i<n; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(n, linkedList, collection) {
  var address = linkedList;
  if (n > 0) {
     address = nodeAt(n-1, linkedList, collection).next
  }
  return address;
}

function indexAt(targetnode, collection, linkedList) {
  var index = 0;
  var node = collection[linkedList];
    while (node.next) {
      if (node === targetnode) {
        return index;
      }
      node = next(node, collection);
      index++;
    }
}

function insertNodeAt(n, address, linkedList, collection) {
  let newNode = collection[address];
  if (n === 0) {
    newNode.next = linkedList;
    linkedList = address;
  } else {
    newNode.next = nodeAt(n-1, linkedList, collection).next;
    nodeAt(n-1, linkedList, collection).next = address;
  }
}

function deleteNodeAt(n, linkedList, collection) {
  if (n === 0) {
    linkedList = addressAt(1, linkedList, collection);
  } else {
    nodeAt(n-1, linkedList, collection).next = addressAt(n+1, linkedList, collection);
  }
  delete nodeAt(n, linkedList, collection)
}
