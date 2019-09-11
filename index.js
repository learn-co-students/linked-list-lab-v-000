function getName(node) {
    return node["name"]
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection){
    let nextAddress = node["next"] 
    return collection[nextAddress]
  }

function nodeAt(index, head, collection){
    let node = collection[head];
    let i; 
    for(i = 0; i < index; i++){
        node = next(node, collection);
    }

    return node;
}

function addressAt(index, head, collection){
    let nodeAddress = head; 
    let node = collection[head];
    let i; 
    for(i = 0; i < index; i++){
        nodeAddress = node["next"];
        node = next(node, collection);
    }

    return nodeAddress;
}

function indexAt(node, collection, head){
    let currentNode = collection[head];
    let i; 
    for(i = 0; currentNode !== node; i++){
        currentNode = next(currentNode, collection);
    }

    return i;
}