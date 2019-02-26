import { link } from "fs";

function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(head, collection) {
  return collection[head.next]
  // var addresses = Object.keys(collection)
  // var lastIndex = addresses.length - 1
  // if (head == collection[addresses[lastIndex]]) {
  //   return collection[addresses[0]]
  // } else {
  //   for (var i = 0; i <= lastIndex; i++) {
  //     if (collection[addresses[i]] == head) {
  //       return collection[addresses[i + 1]]
  //     }
  //   }
  // }
}

function nodeAt(index, linkedList, collection) {
  let currentNode = headNode(linkedList, collection)
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection)
  }
  return currentNode
}

function addressAt(index, linkedList, collection) {
  let node = nodeAt(index, linkedList, collection)
  return Object.keys(collection).find(address => collection[address] == node)
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection)
  let currentIndex = 0
  while (currentNode != node) {
    currentNode = next(currentNode, collection)
    currentIndex++
  }
  return currentIndex
}

function insertNodeAt(index, newAddress, linkedList, collection) {
  const rightNode = nodeAt(index, linkedList, collection)
  const rightAddress = addressAt(index, linkedList, collection)
  const leftNode = nodeAt(index - 1, linkedList, collection)
  leftNode.next = newAddress
  collection[newAddress].next = rightAddress
}

function deleteNodeAt(index, linkedList, collection) {

}