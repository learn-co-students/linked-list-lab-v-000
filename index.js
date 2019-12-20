function getName(node) {
    return node.name
}


function headNode(linkedList, collection) {
    return collection[linkedList]
}


function next(head, collection) {
    return collection[head.next]
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
        return linkedList;
    } else {
        return nodeAt(index - 1, linkedList, collection).next
    }
}


function indexAt(node, collection, linkedList) {
    let currentNode = headNode(linkedList, collection);
    let currentIndex = 0;
    while (currentNode != node) {
        currentIndex++;
        currentNode = next(currentNode, collection)
    }
    return currentIndex;
}


function insertNodeAt(index, newNodeAdress, linkedList, collection) {
    let nodeBefore = nodeAt(index-1, linkedList, collection);
    let nodeAfter = nodeAt(index, linkedList, collection);

    let nodeAfterIndex = indexAt(nodeAfter, collection, linkedList);
    let nodeAfterAddress = addressAt(nodeAfterIndex, linkedList, collection);

    nodeBefore.next = newNodeAdress;
    collection[newNodeAdress].next = nodeAfterAddress;
}


function deleteNodeAt(index, linkedList, collection) {
    let nodeBefore = nodeAt(index-1, linkedList, collection);
    let nodeAfter = nodeAt(index+1, linkedList, collection);

    let nodeAfterIndex = indexAt(nodeAfter, collection, linkedList);
    let nodeAfterAddress = addressAt(nodeAfterIndex, linkedList, collection);

    nodeBefore.next = nodeAfterAddress;
}