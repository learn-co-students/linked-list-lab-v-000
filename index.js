function getName(n){
  return n.name
}

function headNode(list, coll){
  return coll[list]
}

function next(n1, coll){
  return coll[n1.next]
}

function nodeAt(i,list, coll){
  let node = headNode(list, coll)
  while (i>0){
    node = next(node, coll)
    i--
  }
  return node
}

function addressAt(i, list, coll){
  if (i === 0){
    return list
  }
  else {
    return nodeAt(i-1,list,coll).next
  }
}

function indexAt(node, coll, list){
  // let node = headNode(list, coll)
  let i = 0
  while (nodeAt(i, list, coll) !== node){
    i++
  }
  return i
}

function insertNodeAt(i, addr, list, coll){
  // let hnode = headNode(list,coll)
  let beforeNode = nodeAt(i-1, list, coll)
  coll[addr].next = beforeNode.next
  beforeNode.next = addr

}

function deleteNodeAt(i, list, coll){
  let del = nodeAt(i, list, coll)
  let before = nodeAt(i-1, list, coll)
  before.next = del.next
}
