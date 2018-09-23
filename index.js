  let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
    				masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
    				ntrandm: {name: 'Juliet', next: null}
  					}

function getName(node) {
	return node.name;
}

function headNode(key, collection) {
	return collection[key];
}

function next(node, collection) {
	return collection[node.next];
}

function nodeAt(index, headKey, collection) {
	let node = collection[headKey];
	for (let i = 0; i < index; i++) {
		node = next(node, collection);
	}
	return node;
}

function addressAt(index, headKey, collection) {
	if (index === 0) {
		return headKey;
	} else {
		let node = nodeAt(index-1, headKey, collection);
		return node.next;
	}
}

function indexAt(node, collection, headKey){
  let currentNode = headNode(headKey, collection);
  let currentIndex = 0;
  while(currentNode != node){
    currentIndex++
    currentNode = next(currentNode, collection)
  }
  return currentIndex;
}

function insertNodeAt(index, newNodeAddress, headKey, collection){
  let previousNode = nodeAt(index-1, headKey, collection);
  let subsequentNodeAddress = addressAt(index, headKey, collection);
  previousNode.next = newNodeAddress;
  let newNode = collection[newNodeAddress];
  newNode.next = subsequentNodeAddress;
}

function deleteNodeAt(index, headKey, collection){
	let previousNode = nodeAt(index-1, headKey, collection);
	let subsequentNodeAddress = addressAt(index+1, headKey, collection);
	previousNode.next = subsequentNodeAddress;
}