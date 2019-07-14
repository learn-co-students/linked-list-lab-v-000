function getName(node) {
  return node.name
}

function headNode(head, coll) {
  return coll[head]
}

function next(head, coll){
  return coll[head.next]
}

function nodeAt(index, head, coll) {
  let node = coll[head]
  for (let i = 0; i < index; i++) {
    node = next(node, coll)
  }
  return node
}

function addressAt(index, head, coll) {
  if (index === 0) {
    return head
  }
  return nodeAt(index - 1, head, coll).next
}

function indexAt(node, coll, head) {
  let i = 0
  while (node !== coll[head]) {
    head = coll[head].next
    i++
  }
  return i
}

function insertNodeAt(index, newNode, head, coll) {
  let prev = addressAt(index-1, head, coll)
  let node = addressAt(index, head, coll)

  coll[newNode].next = node
  coll[prev].next = newNode
}

function deleteNodeAt(index, head, coll) {
  let prev = addressAt(index - 1, head, coll)
  let current = coll[prev].next
  coll[prev].next = coll[current].next
}
