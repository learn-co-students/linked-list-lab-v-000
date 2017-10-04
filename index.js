function getName(node){
    return node.name
}

function headNode(node, collection){
    return collection[node]
}

function next(node, collection){
    let nextAddress = node.next
    return collection[nextAddress]
}

function nodeAt(index, node, collection){
    let currentNode = headNode(node, collection)

    for(let i = 0; i < index; i++){
        currentNode = next(currentNode, collection)
    }

    return currentNode
}

function addressAt(index, node, collection){
    if(index == 0){
        return node
    } else {
        let currentNode = nodeAt(index-1, node, collection)
        return currentNode.next
    }
}

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection)
    let currentIndex = 0

    while(currentNode != node){
        currentIndex++
        currentNode = next(currentNode, collection)
    }
    return currentIndex
}

function insertNodeAt(index, newNodeAddress, headAddress, collection){
    let prevNode = nodeAt(index - 1, headAddress, collection)
    let newNode = collection[newNodeAddress]
    let nextNode = addressAt(index, headAddress, collection)

    prevNode.next = newNodeAddress
    newNode.next = nextNode
}

function deleteNodeAt(index, headAddress, collection){
    let prevNode = nodeAt(index - 1, headAddress, collection)
    let skipAddress = nodeAt(index, headAddress, collection).next

    prevNode.next = skipAddress
}