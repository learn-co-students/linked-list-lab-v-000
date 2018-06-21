function getName(node){
  return node['name'];
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(head, collection){
  return collection[head['next']]
}

function nodeAt(index, linkedList, collection){
  let node = headNode(linkedList, collection)

  for(let i = 0; i < index; i++){
     node = next(node, collection);
  }

  return node;
}

function addressAt(index, linkedList, collection){
  let address = linkedList

  for(let i = 0; i < index; i++){
     address = collection[address]['next']
  }

  return address;
}

function indexAt(node, collection, linkedList){
  let found = headNode(linkedList, collection)
  let index = 0
  while (found !== node){
    found = next(found, collection)
    index++
  }
  return index;
}

function insertNodeAt(index, newAddress, linkedList, collection){
  let address = addressAt(index, linkedList, collection)
  let previousAddress = addressAt(index - 1, linkedList, collection)
  collection[newAddress]['next'] = address
  collection[previousAddress]['next'] = newAddress
}

function deleteNodeAt(index, linkedList, collection){
  let address = addressAt(index, linkedList, collection)
  let previousAddress = addressAt(index - 1, linkedList, collection)
  let nextAddress = addressAt(index + 1, linkedList, collection)
  collection[previousAddress]['next'] = nextAddress
  delete collection[address]
}
