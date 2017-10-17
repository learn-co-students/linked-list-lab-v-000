function getName(node) {
    return node.name;
}

function next(node, collection) {
    let nextAddress = node.next
    return collection[nextAddress]
}

function headNode(linkedList, collection) {
    return collection[linkedList];
}

function nodeAt(index, linkedList, collection) {
    let currentNode = headNode(linkedList, collection);
    for (let i = 0; i < index; i++) {
        currentNode = next(currentNode, collection)
    }
    return currentNode;
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {
        return linkedList
    } else {
        let node = nodeAt(index - 1, linkedList, collection);
        return node.next
    }
}

function indexAt(node, collection, linkedList) {
    let currentNode = headNode(linkedList, collection);
    let currentID = 0;
    if (currentNode != node) {
        currentID++
        currentNode = next(currentNode, collection)
    }
    return currentID
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)

    let previousNodeID = indexAt(previousNode, collection, linkedList)
    let subsequentNodeID = indexAt(subsequentNode, collection, linkedList)
    let previousNodeAddress = addressAt(previousNode, linkedList, collection)
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
}

function deleteNodeAt(index, linkedList, collection) {
    let currentNode = headNode(linkedList, collection);
    let previousNode;
    for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = next(currentNode, collection);
    }
    previousNode.next = currentNode.next
}