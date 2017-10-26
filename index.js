function getName(node){
	return node.name;
};

function headNode(linkedList, collection){
	return collection[linkedList];
};

function next(head, collection){
	return collection[head.next];
};

function nodeAt(index, linkedList, collection){
	let node = collection[linkedList];
	for (let i = 0; i < index; i++){
		node = next(node, collection);
	};
	return node;
};

function addressAt(index, linkedList, collection){
	if ( index === 0 ){
		return linkedList;
	} else {
		let node = nodeAt(index - 1, linkedList, collection)
		return node.next;
	};
};


function indexAt(node, collection, linkedList){
	let currentNode = headNode(linkedList, collection);
	let currentIndex = 0;

	while( currentNode != node ){
		currentIndex++;
		currentNode = next(currentNode, collection);
	}
	return currentIndex;
};

function insertNodeAt(index, newNodeAddress, linkedList, collection){
	let prevNode = nodeAt(index - 1, linkedList, collection );
	let subsequentNode = nodeAt( index, linkedList, collection );

	let prevNodeIdx = indexAt(prevNode, collection, linkedList);
  	let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList);
  	
  	let prevNodeAddress = addressAt(prevNodeIdx, linkedList, collection);
  	let subsequentNodeAddress = addressAt(subsequentNodeIdx, linkedList, collection);

  	prevNode.next = newNodeAddress;

  	let newNode = collection[newNodeAddress];

  	newNode.next = subsequentNodeAddress;
};


function deleteNodeAt(index, linkedList, collection){
	let prevNode; 
	let currentNode = headNode(linkedList, collection);

	for(let i = 0; i < index; i++){
		prevNode = currentNode;
		currentNode = next(currentNode, collection)
	};
	prevNode.next = currentNode.next;
};