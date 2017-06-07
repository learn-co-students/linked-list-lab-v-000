function getName(node) {
	return node.name;
}

function headNode(linkedList, collection) {
	return collection[linkedList];
}

function next(node, collection) {
	return collection[node.next];
}

function nodeAt(index, linkedList, collection) {
	var node = collection[linkedList];
	for (var i = 0; i < index; i++) {
		node = next(node, collection);
	}
	return node;
}

function addressAt(index, linkedList, collection) {
	if (index === 0) {
		return linkedList;
	}
	return nodeAt(index-1, linkedList, collection).next
}

function indexAt(node, collection, linkedList) {
	var index = 0;
	var currentNode = collection[linkedList];

	while(currentNode) {
		if (currentNode === node) {
			return index;
		}
		currentNode = next(currentNode, collection);
		index++;
	}
}

function insertNodeAt(index, addressOfNewNode, linkedList, collection) {
	var previousNode;
	var nextNode = collection[linkedList];
	for (var i = 0; i < index; i++) {
		previousNode = nextNode;
		nextNode = next(previousNode, collection);
	}
	if (!previousNode) {
		collection[addressOfNewNode].next = linkedList;
		linkedList = addressOfNewNode;
	} else {
		collection[addressOfNewNode].next = previousNode.next;
		previousNode.next = addressOfNewNode;
	}
}

function deleteNodeAt(index, linkedList, collection) {
	var previousNode,
		currentNode = collection[linkedList];
	for (var i = 0; i < index; i++) {
		previousNode = currentNode;
		currentNode = next(currentNode, collection);
	}
	if (previousNode) {
		previousNode.next = currentNode.next
	} else {
		linkedList = collection[linkedList].next;
	}
}