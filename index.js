

function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  return collection[node.next];
}

function nodeAt(index, linkedList, collection) {
  let head = collection[linkedList];
  let next_node = next(head, collection)
  if (index == 0) {
    return head;
  } else if (index == 1) {
    return next_node;
  } else {
    for (let i = 2; i <= index; i++) {
      next_node = next(next_node, collection);
    }
    return next_node;
  }
}

function addressAt(index, linkedList, collection) {
  let head = collection[linkedList];
  let next_address = head.next;
  if (index == 0) {
    return linkedList;
  } else if (index == 1) {
    return next_address;
  } else {
    for (let i = 2; i < index; i++) {
      next_address = collection.next_address.next;
    }
    return next_address;
  }
}

// let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
//     masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
//     ntrandm: {name: 'Juliet', next: null}
//   }

function indexAt(node, collection, linkedList) {
  let index = 1;
  let head = collection[linkedList];
  let current_node = collection[head.next];
  //console.log(head,current_node);
  if (head == node) {
    return 0;
  } else if (current_node == node) {
    return 1;
  } else {
    while (index < Object.keys(collection).length) {
      if (current_node == node) {
        return index;
      } else {
        current_node = collection[current_node.next];
        index++;
      }
    }
  }
}

function insertNodeAt(index, address, linkedList, collection) {
  let head = collection[linkedList];
  let new_node = collection[address];
  let node_before = collection[head.next];
  if (index == 0) {
    new_node.next = linkedList;
    head = new_node;
    return linkedList;
  } else if (index == 1) {
    new_node.next = head.next;
    head.next = address;
  } else {
    for (let i = 2; i < index; i++) {
      node_before = collection[node_before.next];
    }
    new_node.next = node_before.next;
    node_before.next = address;
  }
  return new_node.next;
  /*
  1. find node at index-1 (node_before)
    1.a. set new_node.next to node_before.next
    1.b. set node_before.next to address
  */
}

// let firstNode = {name: 'susie', next: 'rkjasj'}
// let secondNode = {name: 'sam', next: 'asnan'}
// let newNode = {name: 'jill', next: ''}
// let lastNode = {name: 'charlie', next: null}
// let collection = {rkjasj: secondNode,
//   asnan: lastNode,
//   whana: firstNode,
//   ajhsak: newNode}
// let linkedList = 'whana'
//
// console.log(insertNodeAt(1, 'ajhsak', linkedList, collection));

function deleteNodeAt(index, linkedList, collection) {
  let head = collection[linkedList]; // index 0, First Node
  let node_before = collection[head.next]; // index 1, Second Node
  if (index == 0) {
    head = node_before;
    return nil;
  } else if (index == 1) {
    head.next = node_before.next;
  } else {
    for (let i = 2; i < index; i++) {
      node_before = collection[node_before.next];
    }
    node_before.next = collection[node_before.next][next];
  }
  return node_before.next;
}

// let firstNode = {name: 'susie', next: 'rkjasj'}
// let secondNode = {name: 'sam', next: 'asnan'}
// let newNode = {name: 'jill', next: ''}
// let lastNode = {name: 'charlie', next: null}
// let collection = {rkjasj: secondNode,
//   asnan: lastNode,
//   whana: firstNode,
//   ajhsak: newNode}
//   let linkedList = 'whana'
// console.log(deleteNodeAt(1, linkedList, collection))
