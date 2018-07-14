/*let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
  masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
  ntrandm: {name: 'Juliet', next: null}
}*/

function getName(node){
  return node.name;
}

function headNode(linkedList, collection){
  return collection[linkedList];
}

function next(node, collection){
  return collection[node.next]
}

function nodeAt(index, linkedList, collection){
  let node = headNode(linkedList, collection);
  for(let i = 0; i < index; i++){
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, linkedList, collection){
  if (0 === index){
    return linkedList;
  } else {
    return nodeAt(index - 1, linkedList, collection).next;
  }
}

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection);
  let index = 0;
  while (currentNode !== node){
    ++index;
    currentNode = next(currentNode, collection)
  }
  return index;
}

function insertNodeAt(index, address, linkedList, collection){
  if (index === 0){
    collection[address].next = linkedList;
  } else {
    let previousNode = nodeAt(index - 1, linkedList, collection);
    collection[address].next = previousNode.next
    collection[addressAt(index -1, linkedList, collection)].next = address;
  }
}

function deleteNodeAt(index, linkedList, collection){
  let deleteNode = nodeAt(index, linkedList, collection);
  if (index > 0){
    collection[addressAt(index -1 ,linkedList, collection)].next = deleteNode.next
  }
}
