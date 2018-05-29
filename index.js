function getName(node) {
    return node.name;
}

function headNode(addr, node) {
    return node[addr];
}

function next(node, collection) {
    return collection[node.next];
}

function nodeAt(index, head, collection) {
    let node = headNode(head, collection);
    for(let i = 0; i < index; i++){
        node = next(node, collection);
    }
    return node;
}

function addressAt(index, head, collection) {
    let newIndex;
    if (index !== 0) {
      newIndex = index - 1
      let node = nodeAt(newIndex, head, collection);
      return node.next;
    }
    else{
      return head
    }
  }

function indexAt(node, collection, head) {
    let newNode = headNode(head, collection);
    let i = 0;
    while(getName(newNode) != getName(node)){
      newNode = next(newNode, collection);
      i++;
    }
    return i;
}

function insertNodeAt(index, newLocation, head, collection) { 
    if(index !== 0) {
      let previousIndex = index - 1;
      let previousNode = nodeAt(previousIndex, head, collection);
      let previousLocation = previousNode.next;
      previousNode.next = newLocation;
      let newNode = nodeAt(index, head, collection);
      newNode.next = previousLocation;
    }
  }
  
  function deleteNodeAt(index, head, collection) {
    if(index !== 0) {
      let previousIndex = index - 1;
      let previousNode = nodeAt(previousIndex, head, collection);
      let nextIndex = index + 1;
      previousNode.next = addressAt(nextIndex, head, collection);
    }
  }