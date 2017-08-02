const getName = node => ( node.name )

const headNode = (list, collection) => {
  return collection[list];
}

const next = (node, collection) => {
  return collection[node.next];
}

const nodeAt = (index, list, collection) => {
  let node = headNode(list, collection);
  for(let i = 0; i < index; i++) {
    node = next(node, collection);
  }

  return node;
}

const addressAt = (index, head, collection) => {
  let address = head;
  let node = collection[address]
  for(let i = 0; i < index; i++) {
    address = node.next;
    node = next(node, collection);
  }
  return address;
}

const indexAt = (node, collection, head) => {
  let index = 0;
  let n = headNode(head, collection);
  while (n != node) {
    index++;
    n = next(n, collection);
  }
  return index;
}

const insertNodeAt = (index, address, head, collection) => {
  collection[address].next = addressAt(index, head, collection);
  nodeAt(index-1, head, collection).next = address;
}

const deleteNodeAt = (index, head, collection) => {
  nodeAt(index - 1, head, collection).next = nodeAt(index, head, collection).next;
}