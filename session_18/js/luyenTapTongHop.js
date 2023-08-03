//bai 1
let products = [
    {
        id: 1,
        name: "Milk",
        count: 100
    },
    {
        id: 2,
        name: "Yakult",
        count: 100
    },
    {
        id: 3,
        name: "Butter",
        count: 100,
    }];
//thêm
products.push({
    id: 4,
    name: "Butter",
    count: 100,
})

console.log(products)
//xóa
let index = products.findIndex(item => item.id == 2);
if (index !== -1) {
    products.splice(index, 1);
}
//sửa
let index1 = products.findIndex(item => item.id == 3);
if (index1 !== -1) {
    products[index1].count = 0;
}
console.log(products)
//tìm
let index2 = products.filter(item => item.name == "Butter");
console.log(index2)

//bai 2
class Cat{
    name;
    speed;

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
}
class Dog{
    name;
    speed;

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    soun(){
        console.log(`${this.name} gâu gâu`)
    }

    catchCat(cat){
        if (this.speed>cat.speed){
            console.log("Bắt được mèo")
        }else {
            console.log("K bắt được mèo")
        }
    }
}

let dog1=new Dog("Ki Ki",20);
let cat1 = new Cat("Meo",10);

dog1.soun();
dog1.catchCat(cat1)

//bai 3
