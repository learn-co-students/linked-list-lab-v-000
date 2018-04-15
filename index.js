//let node = {name: "Susie", next: "addressOfNextPerson"}
// let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
//   masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
//   ntrandm: {name: 'Juliet', next: null}
// }
function getName(node) { //returns the name value of each node passed through
  return node["name"]
}

function headNode(headAddy, collection) {//returns head node
  //linkedList is the address of the head node
  return collection[headAddy]
}

function next(node, collection) {
  let nextAddress = node["next"]

  return collection[nextAddress]
}

function nodeAt(index, head, collection) { //returns the node
  let node = headNode(head, collection) //returns the head node
  for(let i = 0; i < index; i++){
    node = next(node, collection)
  }
    return node
}

function addressAt(index, head, collection) { //returns address of node
  let newIndex
  if (index !== 0) {
    newIndex = index - 1
    let node = nodeAt(newIndex, head, collection) //returns previous node
    return node["next"] //grabs address of next node which is the one you want
  }else{ //needs to return the address of the first node
    return head
  }

}

function indexAt(node, collection, head) { //returns index of node
  let newNode = headNode(head, collection) //start here: head node
  let i = 0
  while(getName(newNode) != getName(node)){
    newNode = next(newNode, collection)
    i++
  }
  return i
}

function insertNodeAt(index, newLocation, head, collection) { //inserts a newNode at index
  if(index !== 0) { //if we are not inserting a new head node
    let previousIndex = index - 1
    let previousNode = nodeAt(previousIndex, head, collection) //this points to the newNode
    let previousLocation = previousNode["next"] //this is the address to the next node
    previousNode["next"] = newLocation //sets the previous node to point to newNode
    let newNode = nodeAt(index, head, collection)
    newNode["next"] = previousLocation
  }
}

function deleteNodeAt(index, head, collection) {//delete a node at a certain index
  //we find the node at the given index
  //we find the previous node and set it's location to the address of the
  if(index !== 0) {
    let previousIndex = index - 1
    let previousNode = nodeAt(previousIndex, head, collection) //this is the previous node
    let nextIndex = index + 1
    previousNode["next"] = addressAt(nextIndex, head, collection)
  }

}
