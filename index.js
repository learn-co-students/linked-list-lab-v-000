function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(head, collection) {
    let nextIndex = head.next
    return collection[nextIndex]
}

function nodeAt(index, linkedList, collection) {
    let head = headNode(linkedList, collection);

    for (let i = 0; i < index; i++) {
        head = next(head, collection)
    } 
    return head  
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {
        return linkedList
    } else {
        let node = nodeAt(index-1, linkedList, collection)
        return node.next
    }
}

function indexAt(node, collection, linkedList) {
    let head = headNode(linkedList, collection);
    let i = 0;

    while (head.name != node.name && head.next != node.next) {
        i++;
        head = next(head, collection);
    }
    return i
}

function insertNodeAt(index, newAddress, linkedList, collection) {
    let newNode = collection[newAddress];

    let addressOfPrevious = addressAt(index-1, linkedList, collection);
    let nodeOfPrevious = collection[addressOfPrevious];
    let nextOfPrevious = nodeOfPrevious.next

    nodeOfPrevious.next = newAddress;
    newNode.next = nextOfPrevious;

}

function deleteNodeAt(index, linkedList, collection) {
    let node = nodeAt(index, linkedList, collection);
    let nextOfnode = node.next;

    let previousNode = nodeAt(index-1, linkedList, collection);

    previousNode.next = nextOfnode;
}