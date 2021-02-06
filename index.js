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
   let node = collection[linkedList]
   for (let i = 1; i <= index; i++) {
       node = collection[node.next]
   }
   return node;
}

function addressAt(index, linkedList, collection) {
    let node = collection[linkedList]
    if (index === 0) {
        return linkedList
    }

    for (let i = 0; i < index; i++) {
       node = node.next
   }

   return node;
}

function indexAt(node, collection, linkedList) {
    let counter = 0
    let n = collection[linkedList]

    while (n != node && n.next) {
        n = n.next
        counter ++
    }
    return counter;
}

function insertNodeAt(index, newNode, linkedList, collection) {
    let counter = 1;
    let previous = collection[linkedList];
    let node = collection[previous.next];

    while (counter != index) {
        previous = collection[previous.next];
        node = collection[node.next];
        counter ++;
    }

    collection[newNode].next = previous.next;
    previous.next = newNode;
}

function deleteNodeAt(index, linkedList, collection) {
    let counter = 1;
    let previous = collection[linkedList];
    let node = collection[previous.next];

    while (counter != index) {
        previous = collection[previous.next];
        node = collection[node.next];
        counter ++;
    }

    previous.next = node.next;
    node.next = null;

}

// getAt(index) {

//     let node = this.head;
//     let counter = 0;

//     while (node) {
//         if (counter === index) {
//             return node;
//         } 

//         node = node.next;
//         counter++;
//     }
//     return null;
// }