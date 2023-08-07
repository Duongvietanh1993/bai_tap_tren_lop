let productList = [];

function add() {
    let jod = document.getElementById("jod").value;
    productList.push(jod);
    display();
}


function display() {
    let html = '';
    for (let i = 0; i < productList.length; i++) {
        html += `
            <tr>
            <td>${i+1}</td>
            <td>$Ơ</td>
            <td>${productList[i]}</td>
            <td>
            <button onclick="sua(${i})">Edit</button>
            <button onclick="xoa(${i})">Delete</button>
            </td>
            </tr>
            `;
    }
    document.getElementById('list').innerHTML = html;
    document.getElementById('countNumber').innerHTML = productList.length;
    document.getElementById('jod').value = "";
}
function xoa(index) {
    productList.splice(index,1)
    display();
}
function sua(index) {
    productList[index] = prompt(`Điều chỉnh ${productList} thành`)
    display();
}
