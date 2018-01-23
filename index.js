let firstNode = {name: 'susie', next: 'rkjasj'}
let secondNode = {name: 'sam', next: 'asnan'}
let lastNode = {name: 'charlie', next: null}
let collection = {whana: firstNode, rkjasj: secondNode, asnan: lastNode}


function getName(node){
  return node['name']
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(head, collection){
  let nextAddress = head['next']
  return collection[nextAddress]
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
  let node = collection[address]
  for(let i = 0; i < index; i ++){
    
    address = node['next'];
    node = next(node, collection)
  }
  return address;
}

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection)
  let index = 0
  while (node !== currentNode){
    index ++
    currentNode = next(currentNode, collection)
  }
  return  index
}

function insertNodeAt(index, address, linkedList, collection){
  //assign next property to the new node
  collection[address]["next"] = addressAt(index, linkedList, collection)
  //point previous node to new node
  nodeAt(index - 1, linkedList, collection)["next"] = address
}

function deleteNodeAt(index, linkedList, collection){
  debugger
 return nodeAt(index - 1, linkedList, collection)["next"] = addressAt(index + 1, linkedList, collection)


}