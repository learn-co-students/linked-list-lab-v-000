function getName(node) {
    return node["name"]
}

// let f = getName({ name: 'Susie' })
// let fa = f === 'Susie'
// console.log(`${f} should be "Susie": ${fa}`)

// console.log("-------")

function headNode(linkedList, collection) {
    return collection[linkedList]
}

// let firstNode = { name: 'susie', next: 'rkjasj' }
// let secondNode = { name: 'sam', next: 'asnan' }
// let lastNode = { name: 'charlie', next: null }
// let collection = { rkjasj: secondNode, asnan: lastNode, whana: firstNode }
// let linkedList = 'whana'
// let head = collection[linkedList]

// let s = headNode(linkedList, collection)
// let sa = s === head
// console.log(s)
// console.log(head)
// console.log(`${s} should be ${head}: ${sa}`)

// console.log("-------")

function next(node, collection) {
    return collection[node["next"]]
}

let firstNode = { name: 'susie', next: 'rkjasj' }
let secondNode = { name: 'sam', next: 'asnan' }
let lastNode = { name: 'charlie', next: null }
let collection = { rkjasj: secondNode, asnan: lastNode, whana: firstNode }
let linkedList = 'whana'
let head = collection[linkedList]
// let t = next(head, collection)
// let ta = t === secondNode
// console.log(t)
// console.log(secondNode)
// console.log(`${t} should be ${secondNode}: ${ta}`)

// firstNode = { name: 'susie', next: 'rkjasj' }
// secondNode = { name: 'sam', next: 'asnan' }
// lastNode = { name: 'charlie', next: null }
// collection = { rkjasj: secondNode, asnan: lastNode, whana: firstNode }
// linkedList = 'whana'
// head = collection[linkedList]
// let nextNode = next(head, collection)
// let nextNextNode = next(nextNode, collection)
// let t2 = nextNextNode
// let t2a = t2 === lastNode
// console.log(`${t2} should be ${lastNode}: ${t2a}`)

// console.log("-------")

function nodeAt(idx, linkedList, collection) {
    let head = collection[linkedList]
    let currentNode = head
    let node;

    for (let i = 0; i < (idx + 1); i++) {
        node = currentNode

        currentNode = next(currentNode, collection)
    }

    return node
}

// let o = nodeAt(0, linkedList, collection)
// let oa = o === firstNode
// console.log(o)
// console.log(firstNode)
// console.log(`${o} should be ${firstNode}: ${oa}`)

// let o2 = nodeAt(2, linkedList, collection)
// let o2a = o2 === lastNode
// console.log(o2a)
// console.log(lastNode)
// console.log(`${o2} should be ${lastNode}: ${o2a}`)

// console.log("-------")

function addressAt(idx, linkedList, collection) {
    let currentAddress = linkedList

    if (idx === 0) {
        return currentAddress
    }

    let node = nodeAt(0, linkedList, collection)

    for (let i = 0; i < (idx + 1); i++) {
        currentAddress = node["next"]
        node = nodeAt(i, linkedList, collection)
    }

    return currentAddress
}

// firstNode = { name: 'susie', next: 'rkjasj' }
// secondNode = { name: 'sam', next: 'asnan' }
// lastNode = { name: 'charlie', next: null }
// collection = { rkjasj: secondNode, asnan: lastNode, whana: firstNode }
// linkedList = 'whana'
// let i = addressAt(1, linkedList, collection)
// let ia = i === 'rkjasj'
// console.log(`${i} should be 'rkjasj': ${ia}`)

// let i2 = addressAt(0, linkedList, collection)
// let i2a = i2 === 'whana'
// console.log(`${i2} should be 'whana': ${i2a}`)

// console.log("-------")

function indexAt(node, collection, linkedList) {
    let index
    let length = Object.entries(collection).length

    for (let i = 0; i < length; i++) {
        index = i
        if (nodeAt(index, linkedList, collection) === node) {
            break;
        }
    }

    return index
}

// firstNode = { name: 'susie', next: 'rkjasj' }
// secondNode = { name: 'sam', next: 'asnan' }
// lastNode = { name: 'charlie', next: null }
// linkedList = 'whana'
// collection = { rkjasj: secondNode, asnan: lastNode, whana: firstNode }
// let x = indexAt(firstNode, collection, linkedList)
// let xa = x === 0
// console.log(`${x} should be 0: ${xa}`)

// console.log("-------")

function insertNodeAt(idx, val, linkedList, collection) {
    let newNode = collection[val]
    let currentNode = nodeAt(idx - 1, linkedList, collection)
    let nextAddress = currentNode["next"]

    currentNode["next"] = val
    newNode["next"] = nextAddress
    return
}

// firstNode = { name: 'susie', next: 'rkjasj' }
// secondNode = { name: 'sam', next: 'asnan' }
// newNode = { name: 'jill', next: '' }
// lastNode = { name: 'charlie', next: null }
// collection = {
//     rkjasj: secondNode,
//     asnan: lastNode,
//     whana: firstNode,
//     ajhsak: newNode
// }
// linkedList = 'whana'
// insertNodeAt(1, 'ajhsak', linkedList, collection)

// let e = next(firstNode, collection)
// let ea = e === 'rkjasj'
// console.log(`${e} should be ${'rkjasj'}: ${ea}`)

// console.log("-------")

function deleteNodeAt(idx, linkedList, collection) {
    let currentNode = nodeAt(idx - 1, linkedList, collection)
    let nodeToDelete = nodeAt(idx, linkedList, collection)

    currentNode["next"] = nodeToDelete["next"]
    return
}

// firstNode = { name: 'susie', next: 'rkjasj' }
// secondNode = { name: 'sam', next: 'asnan' }
// newNode = { name: 'jill', next: '' }
// lastNode = { name: 'charlie', next: null }
// collection = {
//     rkjasj: secondNode,
//     asnan: lastNode,
//     whana: firstNode,
//     ajhsak: newNode
// }
// linkedList = 'whana'
// deleteNodeAt(1, linkedList, collection)

// let g = next(firstNode, collection)
// let ga = g === 'asnan'
// console.log(`${g} should be ${'asnan'}: ${ga}`)