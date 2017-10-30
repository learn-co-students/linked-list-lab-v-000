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
  let head = headNode(linkedList, collection)

  for (let i = 0; i < index  ; i++) {
       head = next(head, collection)

    }

    return head
 }


 function addressAt(index, linkedList, collection) {
   if (index === 0) {
     return linkedList
   }

   let nodeBeforeTarget = nodeAt(index - 1, linkedList, collection)

   return nodeBeforeTarget.next

 }


 function indexAt(node, collection, linkedList) {

   let currentNode = headNode(linkedList, collection)
   let index = 0

   while (currentNode.name !== node.name && currentNode ) {
     currentNode = next(currentNode, collection)
     index += 1
   }

   return index

 }

 function insertNodeAt(index, address, linkedList, collection) {
   debugger

   let updateNextKey = nodeAt(index - 1 , linkedList, collection)
  collection[address]['next'] = updateNextKey.next
  updateNextKey.next = address
 }


function deleteNodeAt(index , linkedList, collection) {
  let previousNode = nodeAt(index -1, linkedList, collection)
  let nodeToDelete = next(previousNode, collection)
  previousNode.next = nodeToDelete.next
  nodeToDelete.next = null
}
