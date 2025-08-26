const people = [
    {
        name:'张三',
        age:18,
        role:'admin'
    },
    {
        name:'李四',
        age:19,
        role:'user'
    },
    {
        name:'王五',
        age:20,
        role:'user'
    }
]

const allAdults = people.every(item => item.age >= 18)
console.log(allAdults) // true
const hasAdmin = people.some(item => item.role === 'admin')
console.log(hasAdmin) // true
const adminNames = people.filter(item => item.role === 'admin').map(item => item.name)
console.log(adminNames) // [ '张三' ]
