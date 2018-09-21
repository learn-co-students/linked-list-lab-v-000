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
