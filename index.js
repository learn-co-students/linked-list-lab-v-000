import { link } from "fs";

function getName(node) {
  return node.name;
}

function headNode(linkList, col) {
  return col[linkList];
}

function next(head, collection) {
  const nextPtr = head.next;
  const next = collection[nextPtr];
  return next;
}

function nodeAt(idx, linkedList, collection) {
  let curr = collection[linkedList];
  for (let i = 0; i < idx; i++) {
    curr = collection[curr.next];
  }
  return curr;
}

function addressAt(idx, linkedList, collection) {
  let node;
  if (idx === 0) {
    return linkedList;
  } else {
    let node = nodeAt(idx - 1, linkedList, collection);
    return node.next;
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = collection[linkedList];
  let idx = 0;
  while (currentNode !== node) {
    idx++;
    currentNode = next(currentNode, collection);
  }
  return idx;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let subsequentNode = nodeAt(index, linkedList, collection);

  let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection);

  previousNode.next = newNodeAddress;
  let newNode = collection[newNodeAddress];
  newNode.next = subsequentNodeAddress;
}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode;
  let currentNode = collection[linkedList];

  for (let i = 0; i < index; i++) {
    previousNode = currentNode;
    currentNode = next(currentNode, collection);
  }
  previousNode.next = currentNode.next;
}
