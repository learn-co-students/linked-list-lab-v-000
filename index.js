function getName(node){
  return node["name"];
}

function headNode(head_address, collection){
  return collection[head_address];
}

function next(node, collection){
  return collection[node["next"]]
}

function nodeAt(index, head_address, collection){
  let node = collection[head_address];
  let i;
  for(i=0; i < index; i++){
    node = next(node, collection)
  }
  return node
}

function addressAt(index, head_address, collection){
  if(index == 0){
    return head_address;
  } else{
    return nodeAt((index-1), head_address, collection)["next"]
  }
}

function indexAt(node, collection, head_address){
  let nodeOne = node;
  let nodeTwo = collection[head_address];
  let index = 0;
  while(nodeTwo != nodeOne){
    index++;
    nodeTwo = next(nodeTwo, collection)
  }
  return index;
}

function insertNodeAt(index, address, head_address, collection){
  let previousNodeAddress;
  let nextNodeAddress;
  let previousNode;
  if(index <= 0){
    let nextNodeAddress = head_address
  } else{
    if(index == 1){
      previousNodeAddress = head_address
    } else{
      previousNodeAddress = addressAt((index-1), head_address, collection)
    }
    previousNode = collection[previousNodeAddress]
    nextNodeAddress = previousNode["next"]
    previousNode["next"] = address
  }
  collection[address]["next"] = nextNodeAddress
}

function deleteNodeAt(index, head_address, collection){
  if(index == 0){
    collection[head_address] = null
  } else{
    // let node = nodeAt(index, head_address, collection);
    let previousNode = nodeAt((index-1), head_address, collection);
    let nextNodeAddress = addressAt((index+1), head_address, collection);
    previousNode["next"] = nextNodeAddress
  }
}

