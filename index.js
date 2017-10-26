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
   //let head = headNode(linkedList, collection)
   if (index === 0) {
     return linkedList
   }

   let nodeBeforeTarget = nodeAt(index - 1, linkedList, collection)

   return nodeBeforeTarget.next

 }
