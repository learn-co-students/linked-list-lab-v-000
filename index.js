function getName(node) {
    return node.name
}

function headNode(headnode, list) {
    return list[headnode]
}

function next(head, collection) {
    return collection[head.next]
}

function nodeAt(index, head, collection) {
    let startNode = collection[head]
    for(let i= 0; i < index; i++ ) {
        startNode = next(startNode, collection)
    }
    return startNode
}

function addressAt(index, head, collection) {
    if (index === 0) {
        return head
    }
    let newNode = nodeAt(index - 1, head, collection)
    return newNode.next
}

function indexAt(node, collection, headAddress) {
    let currentNode = headNode(headAddress, collection);
    let index = 0;
    while(currentNode != node) {
        currentNode = next(currentNode, collection)
        index ++
    }
    return index;
}

function insertNodeAt(newIndex, newAddress, headAddress, collection) {
    let previousNode = nodeAt(newIndex - 1, headAddress, collection)    
    let latterNode = nodeAt(newIndex, headAddress, collection)
    let newNode = collection[newAddress]
    newNode.next = previousNode.next
    previousNode.next = newAddress
    return newNode;
}

function deleteNodeAt(index, head, collection) {
    let previousNode = nodeAt(index - 1, head, collection)    
    let thisNode = nodeAt(index, head, collection)
    previousNode.next = thisNode.next;
}