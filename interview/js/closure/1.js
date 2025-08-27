function createCounter() {
    let count = 0
    return {
        inc: () => ++count,
        get: () => count
    }
}

const counter = createCounter()
console.log(counter.get()) // 0
console.log(counter.inc()) // 1
console.log(counter.get()) // 1

console.log(counter.count) // undefined