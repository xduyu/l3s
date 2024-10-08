// let user = {
//     name: "John",
//     age: 30,
//     'the answer': false,
// };


// console.log(user.name)
// console.log(user.age)

// console.log(user)

// user.age = 21;

// delete user.age

// console.log(user["the answer"])


// let obj = 5;

// let obj2 = 5;

// console.log(obj === obj2)




// let obj = {
//     name: "john"
// }


// let obj2 = {
//     name: "john"
// }
// console.log(obj == obj2)

// let employer = {
//     name: "Jhon",
//     job: "Web-developer",
//     age: "31",
//     salary: 625000
// }

// for (key in employer) {
//     console.log("ключ: " + key + " Значение: " + employer[key]) // emplayer это переменная, key сам ключ для перебора
// }



// for (key in employer) {
//     console.log(employer[key])
// }


// console.log(user.name)
// console.log(user.age)

// 1

// let person = {
//     name: "John",
//     age: 30,
//     city: "New-York"
// }

// person.name = "Andrew";
// person.age = 31
// person.city = "Tyumen"

// console.log(person)

// 2

// let car = {
//     make: "make",
//     model: "model",
//     year: 2010
// }

// console.log(car.model)


// 3

// let student = {
//     name: "name",
//     grade: "grade"
// };

// student.email = "email@email.com";
// student.grade = "grade2";

// console.log(student)

// 4

// let book = {
//     title: "title",
//     author: "author",
//     pages: "pages"
// }

// for (key in book) {
//     console.log(`Ключи: ${key} | Значения: ${book[key]}`)
// }



// 5


// let employee = {
//     name: "name",
//     job: "job",
//     address: {
//         city: "city",
//         country: "country",
//         street: "street"
//     }
// }

// console.log(employee)


// 5(6)

// let employee = {
//     name: "name",
//     job: "job",
//     address: {
//         city: "city",
//         country: "country",
//         street: "street"
//     }
// }

// console.log(employee.address.city)


// let employee = {
//     name: "name",
//     info() {
//         console.log("Hello! My name is " + `${this.name}`)
//     }
// }



// employee.info()


// new




let user = {
    name: null,
    age: null,
    sayhello: function (phone) {
        console.log(`hello! ${this.name},${phone}`)
    }
}

let person1 = {
    name: 123,
    age: "Не известно"
}


// const dataPersonBind = user.sayhello.bind(person1)
// dataPersonBind()

// const dataPersonCall = user.sayhello.call(person1)

const dataPersonAply = user.sayhello.apply(person1, [7777])