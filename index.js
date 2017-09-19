// var firstNode = {name: 'susie', next: 'rkjasj'}
// var secondNode = {name: 'sam', next: 'asnan'}
// var lastNode = {name: 'charlie', next: null}

// var collection = {
//   rkjasj: secondNode,
//   asnan: lastNode,
//   whana: firstNode
// }

function getName(node) {
  return node.name;
}

function headNode(head, collection) {
  return collection[head];
}

function next(node, collection) {
  var nextAddress = node.next;
  return collection[nextAddress];
}

function nodeAt(index, head, collection) {
  var node = headNode(head, collection);
  for (var i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, head, collection) {
  if (index === 0) {
    return head;
  } else {
    var node = nodeAt(index - 1, head, collection);
    return node.next;
  }
}

function indexAt(node, collection, head) {
  var index = 0;
  var currentNode = headNode(head, collection);

  while (currentNode !== node) {
    index++;
    currentNode = next(currentNode, collection); 
  }
  return index;
}

function insertNodeAt(index, newNodeAddress, head, collection) {
  let prevNode;
  
  if (index === 1) {
    prevNode = headNode(head, collection)
  } else {
    for (var i = 0; i < index - 1; i++) {
      prevNode = next(prevNode, collection);
    }
  }

  let prevAddress = prevNode.next;
  let newNode = collection[newNodeAddress];
  newNode.next = prevAddress;
  prevNode.next = newNodeAddress;
}

function deleteNodeAt(index, head, collection) {
  let prevNode;
  let currentNode = nodeAt(index, head, collection);

  if (index === 1) {
    prevNode = headNode(head, collection);
  } else {
    for (var i = 0; i < index - 1; i++) {
      prevNode = next(prevNode, collection)
    }
  }

  prevNode.next = currentNode.next;
}