function getName(node){
    return node['name']
}

function headNode(linkedList, collection){
    return collection[linkedList]
}

function next(node, collection){
    return collection[node[1]]
}

function nodeAt(index, linkedList, collection){
    let counter = 0
    let node = headNode(linkedList, collection)

    while (counter != index){
        node = next(node, collection)
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
            currentNode = next(currentNode)
            index += 1
        }

        return index
    }
}

function insertNodeAt(index, address, linkedList, collection){
    if (0 === index){
        collection[address]['next'] = linkedList
    }

    else {
        let previousNode = nodeAt(index - 1, linkedList, collection)
        collection[address]['next'] = previousNode['address']
        collection[getName(previousNode)]['address'] = address
    }
}