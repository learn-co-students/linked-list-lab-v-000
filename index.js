// we need a function, getName() that returns the name of the node passed through
function getName(node) {
    return node.name
}

// we need a function, headNode(), that returns the head node of the linked list

function headNode(linkedList, collection) {
    return collection[linkedList]
}

// need a function that returns the following node every time it is called
//  should also return the correct node when called multiple times
function next(node, collection) {
    let nextAddress = node.next
    return collection[nextAddress]
}

function nodeAt(index, linkedList, collection) {
    let currentNode = headNode(linkedList, collection)

    for (let i = 0; i < index; i++) {
        currentNode = next(currentNode, collection)
    }

    return currentNode
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {
        return linkedList
    } else {
        let currentNode = nodeAt(index - 1, linkedList, collection)
        return currentNode.next
    }
}
function indexAt(node, collection, linkedList) {
    let currentNode = headNode(linkedList, collection);
    let index = 0;

    while ( currentNode.name !== node.name ) {
        currentNode = next(currentNode, collection)
        index += 1
    }

    return index;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let followingNode = nodeAt(index + 1, linkedList, collection)

    let previousNodeIndex = indexAt(previousNode, collection, linkedList)
    let followingNodeIndex = indexAt(followingNode, collection, linkedList)

    let previousNodeAddress = addressAt(previousNode, linkedList, collection)
    let followingNodeAddress = addressAt(followingNode, linkedList, collection)

    previousNode.next = newNodeAddress

    let newNode = collection[newNodeAddress]

    newNode.next = followingNodeAddress
}

function deleteNodeAt(index, linkedList, collection) {
    let currentNode = nodeAt(index, linkedList, collection)
    
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let previousNodeIndex = indexAt(previousNode, collection, linkedList)
    let previousNodeAddress = addressAt(previousNode, linkedList, collection)

    previousNode.next = currentNode.next
}