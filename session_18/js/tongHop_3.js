class User {
    name;
    email;
    address;
    phone;

    constructor(name, email, address, phone) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.role = 0;
    }
}

class Admin extends User {


    constructor(name, email, address, phone) {
        super(name, email, address, phone);
        this.role = 1;
    }
}

const users = [];
const user1 = new User("Long", "long@gmail.com", "HN", "123456789");
const user2 = new User("Lân", "lan@gmail.com", "HN", "123456789");
const user3 = new User("Quy", "quy@gmail.com", "HN", "123456789");
const admin1 = new Admin("Phụng", "phung@gmail.com", "HN", "123456789");
users.push(user1, user2, user3, admin1);
console.log(users)


function deleteUser(name) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name == name && !(user instanceof Admin)) {
            users.splice(i, 1);
            break;
        }
    }
}
function modifyUserInfo(id, name, email, address, phone) {
    for (const user of users) {
        if (id === user.id && !(user instanceof Admin)) {
            user.name = name ?? user.name;
            user.email = email ?? user.email;
            user.address = address ?? user.address;
            user.phone = phone ?? user.phone;
            break;
        }
    }
}

// add an admin to the user list
const admin2 = new Admin("Hùng", "admin2@gmail.com", "HN", "123456789");
users.push(admin2);

// print information of all admins
for (const user of users) {
    if (user instanceof Admin) {
        console.log(`Name: ${user.name}, Email: ${user.email}, Address: ${user.address}, Phone: ${user.phone}, Role: ${user.role}`);
    }
}

