const getName = node => node.name

const headNode = (head, collection) => collection[head] 

const next = (node, collection) => {
	const nextItemKey = node.next;
    return collection[nextItemKey];
}

const nodeAt = (index, head, collection) => {
    let item = collection[head];
    for(let i = 0; i < index; i++){
      item = next(item, collection)  
    }
    return item
}

const addressAt = (index, head, collection) => {
	let itemAddress = head;
	for(let i = 0; i < index; i++){
		itemAddress = collection[itemAddress].next
	}
	return itemAddress;
}

const indexAt = (node, collection, head) => {
    let currentNode = collection[head];
    let index = 0;
    while(currentNode != node){
        currentNode = collection[currentNode.next];
        index++;
    } 
    return index;
}

const insertNodeAt = (index, newLocation, head, collection) => {
    let n = index - 1;
    let pointer = head;
    for(let i = 0; i < n; i++){
    	pointer = collection[pointer].next
    } 
    let savedNextPointer = collection[pointer].next;
    collection[pointer].next = newLocation;
    collection[newLocation].next = savedNextPointer;
}

const deleteNodeAt = (index, head, collection) => {
   let n = index - 1;
   let pointer = head; 
   for(let i = 0; i < n; i++){
       pointer = collection[pointer].next
   }
   let previousNode = collection[pointer];
   let subsequentNodeLocation = collection[previousNode.next].next
   previousNode.next = subsequentNodeLocation;
}





