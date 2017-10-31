function getName(node) {

}

let f = getName({ name: 'Susie' })
let fa = f === 'Susie'
console.log(`${f} should be "Susie": ${fa}`)

console.log("-------")

function headNode(linkedList, collection) {

}

let firstNode = { name: 'susie', next: 'rkjasj' }
let secondNode = { name: 'sam', next: 'asnan' }
let lastNode = { name: 'charlie', next: null }
let collection = { rkjasj: secondNode, asnan: lastNode, whana: firstNode }
let linkedList = 'whana'
let head = collection[linkedList]

let s = headNode(linkedList, collection)
let sa = f === head
console.log(`${s} should be ${head}: ${sa}`)

console.log("-------")

function next(head, collection) {

}

let t = next(head, collection)
let ta = t === secondNode
console.log(`${t} should be ${secondNode}: ${ta}`)

console.log("-------")

function nodeAt(idx, linkedList, collection) {

}

let o = nodeAt(0, linkedList, collection)
let oa = o === firstNode
console.log(`${o} should be ${firstNode}: ${oa}`)

let o2 = nodeAt(2, linkedList, collection)
let o2a = o2 === lastNode
console.log(`${o2} should be ${lastNode}: ${o2a}`)

console.log("-------")

function addressAt(idx, linkedList, collection) {

}

let firstNode = { name: 'susie', next: 'rkjasj' }
let secondNode = { name: 'sam', next: 'asnan' }
let lastNode = { name: 'charlie', next: null }
let collection = { rkjasj: secondNode, asnan: lastNode, whana: firstNode }
let linkedList = 'whana'
let i = addressAt(1, linkedList, collection)
let ia = i === 'rkjasj'
console.log(`${i} should be 'rkjasj': ${ia}`)

let i2 = addressAt(0, linkedList, collection)
let i2a = i2 === 'whana'
console.log(`${i2} should be 'whana': ${ia2}`)

console.log("-------")

function indexAt(node, collection, linkedList) {

}

let firstNode = { name: 'susie', next: 'rkjasj' }
let secondNode = { name: 'sam', next: 'asnan' }
let lastNode = { name: 'charlie', next: null }
let linkedList = 'whana'
let collection = { rkjasj: secondNode, asnan: lastNode, whana: firstNode }
let x = indexAt(firstNode, collection, linkedList)
let xa = x === 0
console.log(`${x} should be 0: ${xa}`)

console.log("-------")

function insertNodeAt(idx, val, linkedList, collection) {

}

let firstNode = { name: 'susie', next: 'rkjasj' }
let secondNode = { name: 'sam', next: 'asnan' }
let newNode = { name: 'jill', next: '' }
let lastNode = { name: 'charlie', next: null }
let collection = {
    rkjasj: secondNode,
    asnan: lastNode,
    whana: firstNode,
    ajhsak: newNode
}
let linkedList = 'whana'
insertNodeAt(1, 'ajhsak', linkedList, collection)

let e = newNode.next(firstNode, collection)
let ea = e === 'rkjasj'
console.log(`${e} should be ${'rkjasj'}: ${ea}`)

console.log("-------")

function deleteNodeAt(idx, linkedList, collection) {

}

let firstNode = { name: 'susie', next: 'rkjasj' }
let secondNode = { name: 'sam', next: 'asnan' }
let newNode = { name: 'jill', next: '' }
let lastNode = { name: 'charlie', next: null }
let collection = {
    rkjasj: secondNode,
    asnan: lastNode,
    whana: firstNode,
    ajhsak: newNode
}
let linkedList = 'whana'
deleteNodeAt(1, linkedList, collection)

let g = firstNode.next(firstNode, collection)
let ga = g === 'asnan'
console.log(`${g} should be ${'asnan'}: ${ga}`)