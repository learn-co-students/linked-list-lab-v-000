let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
ntrandm: {name: 'Juliet', next: null}
}

function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(head, collection) {
  var addresses = Object.keys(collection)
  if (head == collection[addresses[addresses.length - 1]]) {
    return collection[addresses[0]]
  } else {
    for (var i = 0; i <= addresses.length - 1; i++) {
      if (collection[addresses[i]] == head) {
        return collection[addresses[i + 1]]
      }
    }
  }
}