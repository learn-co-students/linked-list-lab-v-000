function getName(node){
  return node.name;
}

function headNode(head, collection){
  return collection[head];
}

function next(node, collection){
  return collection[node.next];
}

function nodeAt(index, head, collection){
  var node = collection[head];
  for (var i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, head, collection){
  if(index == 0){
    return head;
  } else {
    var prevNode = nodeAt(index-1, head, collection);
    return prevNode.next;
  }
}

function indexAt(node, collection, head){
  var current = headNode(head, collection);
  for (var i = 0; i < Object.keys(collection).length; i++) {
    if(current === node){
      return i;
    } else {
      current = next(current, collection);
    }
  }
}

function insertNodeAt(index, address, head, collection){
  var prevNode = nodeAt(index-1, head, collection);
  var nextNode = nodeAt(index, head, collection);
  var nextAddress = addressAt(index, head, collection);

  var node = collection[address];
  prevNode.next = address;
  node.next = nextAddress;
}

function deleteNodeAt(index, head, collection){
  var prevNode = nodeAt(index-1, head, collection);
  var current = nodeAt(index, head, collection);
  var nextAddress = addressAt(index+1, head, collection);
  prevNode.next = nextAddress;
  delete collection[current]
}
