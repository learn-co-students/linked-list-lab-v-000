  let collection = {
    0: {name: 'Alexandra', next: 2},
    2: {name: 'Kirstin', next: 4}, 
    4: {name: 'Juliet', next: 6},
    6: {name: 'Timmy', next: 8},
    8: {name: 'Jacob', next: null}
  }
  
  let head = collection[0]
  
  function getName (node) {
    return node["name"];
  }
  
  function headNode (linkedList, collection) {
    return collection[linkedList];
  }
  
  function next(node, collection) {
    return collection[node["next"]]
  }
  
  function nodeAt(index, linkedList, collection) {
    
  }