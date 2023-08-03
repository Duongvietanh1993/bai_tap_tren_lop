let stores = [{id: 1, name: "Milk", count: 100}, {id: 2, name: "Yakult", count: 100}, {
    id: 3,
    name: "Butter",
    count: 100,
}];
let carts = [];
function display() {
    let html = '';
    for (let i = 0; i < carts.length; i++) {
        html += `
            <tr>
            <td>${i + 1}</td>
            <td>${carts[i]}</td>
            <td>${stores[i].count}</td>
            <td><button onclick="sua(${i})">Edit</button> <button onclick="xoa(${i})">Delete</button></td>
            </tr>
            `;
    }
    document.getElementById('list').innerHTML = html;
    document.getElementById('countNumber').innerHTML = carts.length;
    document.getElementById('product').value = "";
}
function add() {
    let productInput = document.getElementById("product").value;
    let check = false;
    let foundIndex = -1;
    for (let i = 0; i < stores.length; i++) {
        if (productInput == stores[i].name) {
            check = true;
            foundIndex = i;
            break;
        }
    }
    if (!check) {
        alert("Không có sản phẩm");
        document.getElementById("product").value = "";
    } else {
        if (stores[foundIndex].count > 0) {
            carts.push(productInput);
            stores[foundIndex].count--;
            document.getElementById("product").value = "";
            display();
        } else {
            alert("Đã hết hàng !");
        }
    }
}
function xoa(index) {
    carts.splice(index,1)
    display();
}
function sua(index) {
    carts[index].name = prompt(`Điều chỉnh ${carts} thành`)
    display();
}