//getName
function getName(node) {
    return node.name;
}

//next
function next(node, collection) {
    return collection[node.next];
}

//addressAt
function addressAt(index, linkedList, collection) {
    if(index === 0){
        return linkedList;
    } else {
        let node = nodeAt(index - 1, linkedList, collection);
        return node.next;
    }
}

//headNode
function headNode(linkedList, collection) {
    return collection[linkedList];
}

//nodeAt
function nodeAt(index, linkedList, collection) {
    let currentNode = headNode(linkedList, collection);
    for(let i = 0; i < index; i++) {
        currentNode = next(currentNode, collection);
    }
    return currentNode;
}

//indexAt
function indexAt(node, collection, linkedList) {
    let currentNode = headNode(linkedList, collection);
    let currentIndex = 0;
    while (currentNode != node) {
        currentIndex++
        currentNode = next(currentNode, collection)
    }
    return currentIndex;
}

//insertNodeAt
function insertNodeAt(index, newNodeAddress, linkedList, collection) {
    let previous = nodeAt(index - 1, linkedList, collection);
    let nextAddress = addressAt(index, linkedList, collection);
    previous.next = newNodeAddress;
    let newNode = collection[newNodeAddress];
    newNode.next = nextAddress;
}


//deleteNodeAT
function deleteNodeAt(index, linkedList, collection) {
    let previous;
    let current = headNode(linkedList, collection);
    for (let i = 0; i < index; i++) {
        previous = current;
        current = next(current, collection);
    }
    previous.next = current.next;
}
