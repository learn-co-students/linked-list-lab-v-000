function getName(node){
    return node.name
}

function headNode(headKey, list){
    return list[headKey]
}

function next(node, list){
    return !!node ? list[node.next] : null
}

function nodeAt(index, headKey, list){
    let node = headNode(headKey, list)
    for(let i = 0; i < index; i++){
        node = next(node, list)
        if(!node) return null
    }
    return node
}

function indexAt(node, list, headKey){
    let currentNode = list[headKey]
    let counter = 0
    while(node !== currentNode){
        currentNode = next(currentNode, list)
        counter ++
        if(!currentNode) return -1
    }
    return counter
}

function addressAt(index, headKey, list){
    if(index === 0) return headKey
    const prevNode = nodeAt(index - 1, headKey, list)
    return !!prevNode ? prevNode.next : null
}

function insertNodeAt(index, newNodeKey, headKey, list){
    list[newNodeKey].next = addressAt(index, headKey, list)
    if(index > 0){
        const prevNode = nodeAt(index-1, headKey, list)
        if(!prevNode) throw 'The index is out of bounds of the list'
        prevNode.next = newNodeKey
    }else{
        headKey = newNodeKey
    }
}

function deleteNodeAt(index, headKey, list){
    if(index === 0 ){
        headKey = headNode(headKey, list).next
    }
    const prevNode = nodeAt(index - 1, headKey, list)
    if(!prevNode) throw 'The index is out of bounds of the list'
    prevNode.next = addressAt(index + 1, headKey, list)
}