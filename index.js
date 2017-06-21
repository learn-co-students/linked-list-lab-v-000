function getName(node){
  return node.name;
}

function headNode(linkedList, collection){
  return collection[linkedList];
}

function next(node, collection){
  return collection[node.next];
}

function nodeAt(index, linkedList, collection){
  var node = collection[linkedList];
  for (var i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node;
}

function addressAt(index, linkedList, collection){
  var node = collection[linkedList];
  if(index == 0){
    return linkedList;
  } else {
    for (var i = 0; i < index-1; i++) {
      node = next(node, collection);
    }
    return node.next;
  }
}

function indexAt(n, collection, linkedList){
  var index = 0;
  var node = collection[linkedList];
  while(index < Object.keys(collection).length){
    if(node.name === n.name){
      return index;
    } else {
      node = collection[node.next];
      index++;
    }
  }
}

function insertNodeAt(index, address, head, collection){
  // we need to get the previous node
  // we will need to get the next node after the change
  var prevNode = nodeAt(index-1, head, collection);
  var nextNode = nodeAt(index, head, collection);
  // we get the next address so that we can point the node we are inserting to that address
  var nextAddress = addressAt(index, head, collection);
  // we set the previous node's address to point to the node we are inserting
  prevNode.next = address;
  // we create the new node with the address set to it.
  var newNode = collection[address];
  // we set the next value to the next address to point to the next node in line
  newNode.next = nextAddress;
}

function deleteNodeAt(index, head, collection){
  // start with the head node
  var node = headNode(head, collection);
  // keep track of the previous node
  var previous;

  for (var i = 0; i < index; i++) {
    // stair case it down keeping track of the previous nodes until we reach the index
    previous = node;
    // reset the node to the next node in the collection
    node = next(node, collection);
  }
  // change the previous node's next address to the node's address after the node we are deleting so it's connected
  previous.next = node.next;
  // delete the node;
  delete collection[node];
}
