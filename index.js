const getName = (node) => node.name

const headNode = (linkedList, collection) => collection[linkedList]

const next = (node, collection) => collection[node.next]

const nodeAt = (idx, firstKey, collection) => {
    let current = 0;
    let node = collection[firstKey]
    while (current < idx) {
        node = next(node, collection)
        current += 1
    }
    return node
}

const addressAt = (idx, firstKey, collection) => {
    if (idx === 0) {
        return firstKey
    } else {
        const node = nodeAt(idx - 1, firstKey, collection)
        return node.next
    }
}

const indexAt = (node, collection, firstKey) => {
    let idx = 0;
    let currentNode = collection[firstKey];
    while (currentNode != node) {
        currentNode = next(currentNode, collection);
        idx += 1
    }
    return idx;
}

const insertNodeAt = (idx, key, firstKey, collection) => {
    const nextNode = nodeAt(idx, firstKey, collection);
    let newNode = collection[key];
    newNode.next = addressAt(idx, firstKey, collection);
    if (idx !== 0) {
        const prevNode = nodeAt(idx - 1, firstKey, collection);
        let prevNodeAddr = addressAt(idx - 1, collection, firstKey);
        prevNode.next = key;
    } else {
        firstKey = key;
    }
}

const deleteNodeAt = (idx, firstKey, collection) => {
    let nodeAddr = addressAt(idx, firstKey, collection);
    if (idx !== 0) {
        const prevNode = nodeAt(idx - 1, firstKey, collection);
        let nextNodeAddr = addressAt(idx + 1, firstKey, collection);
        prevNode.next = nextNodeAddr;
    } else {
        firstKey = nodeAddr;
    }
    delete collection.nodeAddr;
}