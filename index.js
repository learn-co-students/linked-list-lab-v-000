  let collection = {
    0: {name: 'Alexandra', next: 2},
    2: {name: 'Kirstin', next: 4}, 
    4: {name: 'Juliet', next: 6},
    6: {name: 'Timmy', next: 8},
    8: {name: 'Jacob', next: null}
  }
  
  let head = collection[0]
  
  function getName (node) {
    return node["name"];
  }
  
  function headNode (linkedList, collection) {
    return collection[linkedList];
  }
  
  function next(node, collection) {
    return collection[node["next"]];
  }
  
  function nodeAt(index, linkedList, collection) {
    let node = collection[linkedList]
    let i;
    for (i = 0; i < index; i++) {
      node = next(node, collection)
    }
    return node
  }
  
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
    
  function addressAt(index, linkedList, collection){
    let node = nodeAt(index, linkedList, collection)
    return getKeyByValue(collection, node);
  }
  
  function indexAt(node, collection, linkedList) {
    let currentNode = collection[linkedList];
    let index = 0;
    if (currentNode !== node) {
      currentNode = next(node, collection);
      index ++;
    }
    return index;
  }
  
function insertNodeAt(index, newNodeAddress, linkedList, collection){
  let previousNode = nodeAt(index - 1, linkedList, collection)
  let subsequentNodeAddress = addressAt(index, linkedList, collection)
  
  previousNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = subsequentNodeAddress
}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection)
  let nextNodeAddress = addressAt(index + 1, linkedList, collection)
  
  previousNode.next = nextNodeAddress
}

