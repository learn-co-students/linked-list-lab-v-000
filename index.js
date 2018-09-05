function getName(node) {
  return node["name"]
}

function headNode(head, collection) {
  return collection[head]
}

function next(node, collection) {
  let nextAddress = node["next"]
  return collection[nextAddress]
}

function nodeAt(index, headKey, collection){
  let node = headNode(headKey, collection);
  for(let i = 0; i < index; i++){
     node = next(node, collection);
  }
  return node
}

function addressAt(index, headKey, collection) {
  if (index === 0) {
    return headKey
  } else {
    let previousNode = nodeAt(index - 1, headKey, collection);
    return previousNode["next"];
  }
}

function indexAt(node, collection, headKey) {
  let comparisonNode = collection[headKey]
  let i = 0;

   while (comparisonNode !== node) {
      i++;
      comparisonNode = next(comparisonNode, collection)
    }
  return i;
}

function insertNodeAt(index, nodeKey, headKey, collection) {
  let previousNode = nodeAt(index - 1, headKey, collection)
  let insertionNode = collection[nodeKey]
  // the address of new node needs to point to next node
  insertionNode["next"] = previousNode["next"]
  // node prior to new node needs to point to right address
  previousNode["next"] = nodeKey;
}

function deleteNodeAt(index, headKey, collection) {
  let previousNode = nodeAt(index -1, headKey, collection)
  let deleteNode = nodeAt(index, headKey, collection)
  previousNode["next"] = deleteNode["next"]
}
