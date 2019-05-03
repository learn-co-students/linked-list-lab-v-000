const getName = node => node['name'];
const headNode = (node, collection) => collection[node];
const next = (node, collection) => collection[node.next];

const nodeAt = (index, linkedList, collection) => {
    // set head node to node variable
    let node = headNode(linkedList, collection);

    // loop through list until you reach index value, resetting
    // node var
    for(let i = 0; i < index; i++){ node = next(node, collection) };

    return node;
};

const addressAt = (index, linkedList, collection) => (
    index === 0 ? linkedList : nodeAt(index - 1, linkedList, collection).next
);

const indexAt = (nodeToSearch, collection, linkedList) => {
    let node = headNode(linkedList, collection);

    for(let i = 0; i < Object.keys(collection).length; i++ ){
        if (node === nodeToSearch){
            return i;
        } else {
            node = next(node, collection)
        }
    }

    return -1;
};

const insertNodeAt = (index, insertedNode, linkedList, collection) => {
    // set prev node value
    const prevNode = nodeAt(index - 1, linkedList, collection);
    // set inserted node to point to prevNode address
    collection[insertedNode].next = prevNode.next;
    // set prev node next value to inserted node
    prevNode.next = insertedNode;
}

const deleteNodeAt = (index, linkedList, collection) => {
    //find next address for node to be removed
    const nextNodeAddress = addressAt(index + 1, linkedList, collection);
    //set previous node
    const prevNode = nodeAt(index - 1, linkedList, collection);
    //reset next node address to the deleted nodes next address;
    prevNode.next = nextNodeAddress;
}