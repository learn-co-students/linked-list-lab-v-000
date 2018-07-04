function getName(node){
    return node['name']
}

function headNode(linkedList, collection){
    return collection[linkedList]
}

function next(node, collection){
    return collection[node['next']]
}

function nodeAt(index, linkedList, collection){
    let counter = 0
    let node = headNode(linkedList, collection)

    while (counter != index){
        node = next(node, collection)
        counter += 1
    }

    return node
}

function addressAt(index, linkedList, collection){
    if (0 === index){
        return linkedList
    }
    else {
        return nodeAt(index - 1, linkedList, collection)['next']
    }
}

function indexAt(node, collection, linkedList){
    if (node === collection[linkedList]){
        return 0
    }
    else {
        let index = 0
        let currentNode = collection[linkedList]

        while (currentNode !== node){
            currentNode = next(currentNode, collection)
            index += 1
        }

        return index
    }

}

function insertNodeAt(spot, address, linkedList, collection){
    if (0 === spot){
        collection[address]['next'] = linkedList
    }

    else {
        let previousNode = nodeAt(spot - 1, linkedList, collection)

        collection[address]['next'] = previousNode['next']
        collection[addressAt(spot - 1, linkedList, collection)]['next'] = address
    }

}

function deleteNodeAt(index, linkedList, collection){
  let doomedNode = nodeAt(index, linkedList, collection)
  if (index > 0) {
    collection[addressAt(index - 1, linkedList, collection)]['next'] = doomedNode['next']
  }
}
