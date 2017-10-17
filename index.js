function getName(linkedList) {
	return linkedList['name']
}

function headNode(linkedList, collection) {
	return collection[linkedList]
}

function next(linkedList, collection) {
	return collection[linkedList["next"]]
}

function nodeAt(index, linkedList, collection) {
	let node = headNode(linkedList, collection)
	for (var i = 0; i < index; i++) {
		node = next(node, collection)
	}
	return node
}

function addressAt(index, linkedList, collection) {
	if (index == 0) {
		return linkedList
	} else {
		let node = nodeAt(index - 1, linkedList, collection)
		return node['next']
	}
}

function indexAt(firstNode, collection, linkedList) {
	let node = headNode(linkedList, collection)
	let index = 0
	while (node != firstNode) {
		node = next(node, collection)
		index ++
	}
	return index
}

function insertNodeAt(index, name, linkedList, collection) {
	let prevNode;

	if (index === 1) {
		prevNode = headNode(linkedList, collection)
	} else {
		for (var i = 0; i < index - 1; i++) {
			prevNode = next(prevNode, collection);
		}
	}
	let prevAddress = prevNode['next'];
	let newNode = collection[name];
	newNode['next'] = prevAddress;
	prevNode['next'] = name;
}

function deleteNodeAt(index, head, collection) {
	let prevNode;
	let currentNode = nodeAt(index, head, collection);

	if (index === 1) {
		prevNode = headNode(head, collection);
	} else {
		for (var i = 0; i < index - 1; i++) {
			prevNode = next(prevNode, collection)
		}
	}

	prevNode['next'] = currentNode['next'];
}
