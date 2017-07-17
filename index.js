function getName(node){
  return node.name;
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(head, collection){
  var next = head.next
  return collection[next]
}

function nodeAt(index, linkedList, collection){
  var i = 0
  var node;
  var head = headNode(linkedList, collection)

  if ( index == 0 ) {
    return head;
  }

  while ( i < index ){
    node = next(head, collection)
    head = node;
    i++
  }

  return node;
}

function addressAt(index, linkedList, collection){
  var i = 0
  var node;
  var head = headNode(linkedList, collection)

  if ( index == 0 ) {
    return linkedList;
  }

  if ( index == 1) {
    return head.next;
  }

  while ( i < index - 1 ){
    node = next(head, collection)
    head = node;
    i++
  }

  return node.next;
}

function indexAt(node, collection, linkedList){
  var i = 0
  var collectionNode = {name: ''}
  var head = headNode(linkedList, collection)

  if (node == head) {
    return 0;
  }

  while ( node.name != collectionNode.name ){
    collectionNode = next(head, collection)
    head = collectionNode;
    i++
  }

  return i;

}

function insertNodeAt(index, name, linkedList, collection){
  var node = collection[name];
  var i = 0
  var head = headNode(linkedList, collection)

  if ( index == 0 ) {
    node.next = linkedList;
    return node;
  }

  var previousNode = nodeAt(index - 1, linkedList, collection)
  node.next = previousNode.next
  previousNode.next = name;
  
  return node;

}

function deleteNodeAt(index, linkedList, collection){
  var head = headNode(linkedList, collection)
   if ( index == 0 ) {
    linkedlist = head.next;
    head.next = null;
    return;
  }

  var previousNode = nodeAt(index - 1, linkedList, collection)
  var currentNode = nodeAt(index, linkedList, collection)

  previousNode.next = currentNode.next;
  currentNode.next = null;

  return currentNode;

}

