const person = {
    name : 'Nadia Khandakhar',
    age : 25,
    profession : 'developer',
    salary : 25000,
    married :true,
    'fav places': ['bandarban','seintmartine','kuakata']
}

person.salary = 30000;
// console.log(person)
//  we can use bracket notation for the same work;
person['age'] = 26;
person['fav places'] = ['maldives','balai','pataya']
console.log(person)

const keyName = 'profession'
console.log(person[keyName])

const propName = 'profession';
person[propName] = 'devops'
console.log(person)