function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  let nextAddress = node.next
  return collection[`${nextAddress}`]
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);
  for(let i = 0; i < index; i++){
     node = next(node, collection);
  }
  return node;
}


function addressAt(index, linkedList, collection) {
  if(index === 0) {
    return linkedList;
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    return node.next;
  }
}

function indexAt(node, collection, linkedList) {
  let inspect = headNode(linkedList, collection);
  let count = 0;

  while(inspect !== node){
    inspect = next(inspect, collection);
    count++;
  }
  return count;
}

function insertNodeAt(index, address, linkedList, collection){
  let previous = nodeAt(index - 1, linkedList, collection)
  let node = nodeAt(index, linkedList, collection)

  let previousIx = indexAt(previous, collection, linkedList)
  let nodeIx = indexAt(node, collection, linkedList)
  let previousAddress = addressAt(previous, linkedList, collection)
  let nodeAddress = addressAt(node, linkedList, collection)
  previous.next = address
  let newNode = collection[address]
  newNode.next = nodeAddress
}


function deleteNodeAt(index, linkedList, collection){
  let previous;
  let currentNode = headNode(linkedList, collection);
  for(let i = 0; i < index; i++){
     previous = currentNode
     currentNode = next(currentNode, collection);
  }
  previous.next = currentNode.next
}
