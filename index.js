function getName(node){
  return node["name"]
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(head, collection){
  let nextone = head["next"]
  return collection[nextone]
}

function nodeAt(index, linklist, collection){
  let thisone = headNode(linklist, collection)
  for (let i = 0; i < index; i++){
    thisone = next(thisone, collection)
  }
  return thisone
}

function addressAt(index, linklist, collection){
  if(index === 0){
    return linklist
  } else {
    let thisone = nodeAt(index - 1, linklist, collection)
    return thisone["next"]
  }
}

function indexAt(node, collection, linklist){
  let thisone = headNode(linklist, collection)
  let index = 0
  while (thisone != node){
    index++
    thisone = next(thisone, collection)
  }
  return index
}

function insertNodeAt(index, node, linkedlist, collection){
  let previous = nodeAt(index -1, linkedlist, collection)
  let next = nodeAt(index, linkedlist, collection)
  let nextAddress = addressAt(next, linkedlist, collection)
  previous["next"] = node
  let newnode = collection[node]
  newnode["next"] = nextAddress
}

function deleteNodeAt(index, linkedlist, collection){
  let previous
  let current = headNode(linkedlist, collection)
  for (let i=0;i<index; i++){
    previous = current
    current = next(current, collection)
  }
  previous["next"] = current["next"]
}
