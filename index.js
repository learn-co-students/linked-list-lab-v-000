function getName(node) {
  return node.name;
}

function next(head, collection) {
  let node = head;
  let nextAddress = node.next;
  return collection[nextAddress];
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);
  //let head = node;

  for (let i = 0; i < index; i++) {
     node = next(node, collection);
   }

  return node;
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList;
  } else {
    let previousNode = nodeAt(index - 1, linkedList, collection);
    return previousNode.next;
  }
}
