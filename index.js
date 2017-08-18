function getName(node){
  return node.name;
}

function headNode(first, collection){
  return collection[first];
}

function next(node, collection){
  return collection[node.next];
}

function nodeAt(index, head, collection){
  let current = headNode(head, collection);
  for(let i=0; i<index; i++){
    current = next(current, collection);
  }
  return current;
}

function addressAt(index, head, collection){
  let current = headNode(head, collection);
  let address = head;
  for(let i=0; i<index; i++){
    address = current.next
    current = next(current, collection);
  }
  return address;
}

function indexAt(node, collection, head){
  let current = collection[head];
  let index = 0;
  while(node.name !== current.name){
    current = next(current, collection);
    index += 1;
  }
  return index;
}

function insertNodeAt(index, node, head, collection){
  let previous = nodeAt(index-1, head, collection);
  collection[node].next = previous.next;
  previous.next = node;
}

function deleteNodeAt(index, head, collection){
  let previous = nodeAt(index-1, head, collection);
  let toDelete = nodeAt(index, head, collection);
  previous.next = toDelete.next;
}
