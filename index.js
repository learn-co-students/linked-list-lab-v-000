function getName(node){
  return node.name;
}

function headNode(list, collection){
  return collection[list];
}

function next(node, collection){
  let nextAddress = node.next
  return collection[nextAddress]
}

function nodeAt(index, list, collection){
  if (index == 0) {
    return collection[list]
  } else if (index == 1) {
    return collection[collection[list].next]
  } else if (index == 2 ) {
    return collection[collection[collection[list].next].next]
  }
}

function addressAt(index, list, collection){
  if (index == 0) {
    return list
  } else if (index == 1) {
    return collection[list].next
  } else if (index == 2 ) {
    return collection[collection[list].next].next
  }
}

function indexAt(node, collection, list){
  let i = 0
  while (i<3) {
    if (i == 0 && collection[list] == node) {
        return i
    } else if (i == 1 && collection[collection[list].next] == node) {
      return i
    } else if (i == 2 && collection[collection[collection[list].next].next]) {
      return i
    }
    i++
  }
}

function insertNodeAt(index, next, list, collection) {
  collection[next].next = addressAt(index,list,collection)
  nodeAt(index-1,list,collection).next = next
}

function deleteNodeAt(index, list, collection) {
  nodeAt(index-1,list,collection).next = nodeAt(index,list,collection).next
}
