import { runInNewContext } from 'vm';
import { link } from 'fs';

// let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
// masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
// ntrandm: {name: 'Juliet', next: null}
// }

function getName(node) {
  console.log('getName:', node['name']);
  return node['name'];
}

function headNode(linkedList, collection) {
  console.log('headNode:', collection[linkedList]);
  return collection[linkedList];
}

function next(head, collection) {
  console.log('next:', head);
  return collection[head['next']];
}

function nodeAt(index, linkedList, collection) {
  let currentNode = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    console.log('nodeAt:', currentNode);
    currentNode = next(currentNode, collection);
  }
  return currentNode;
}

function addressAt(index, linkedList, collection) {
  console.log('addressAt:', index, ' lkl:', linkedList, ' col:', collection);
  if (index === 0) {
    return linkedList;
  } else {
    let node = nodeAt(index - 1, linkedList, collection);
    return node['next'];
  }
}

function indexAt(node, collection, linkedList) {
  console.log('node:', node, ' lkl:', linkedList, ' col:', collection);
  let currentNode = headNode(linkedList, collection);
  let currentIndex;
  for (currentIndex = 0; currentNode != node; currentIndex++) {
    currentNode = next(currentNode, collection);
  }
  return currentIndex;
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let subsequentNode = nodeAt(index, linkedList, collection);

  let previousNodeIndex = indexAt(previousNode.collection, linkedList);
  let subsequentNodeIndex = indexAt(subsequentNode, collection, linkedList);
  let previousNodeAddress = addressAt(previousNode, linkedList, collection);
  let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection);
  previousNode.next = newNodeAddress;
  let newNode = collection[newNodeAddress];
  newNode.next = subsequentNodeAddress;
}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode;
  let currentNode = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    previousNode = currentNode;
    currentNode = next(currentNode, collection);
  }
  previousNode.next = currentNode.next;
}
