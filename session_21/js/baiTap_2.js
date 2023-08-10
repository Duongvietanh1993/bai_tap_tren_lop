let product = [
    {
        id: 1,
        content: "Learn Javascript Session 01",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Anh Bách",
    },
    {
        id: 2,
        content: "Learn Javascript Session 2",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Lâm th`",
    },
    {
        id: 3,
        content: "Learn CSS Session 1",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Hiếu Ci ớt ớt",
    },
];

localStorage.setItem("product", JSON.stringify(product))

let indexEdit = -1;
function display() {
    let str = "";
    for (let i = 0; i < product.length; i++) {
        const elemen=product[i];
        str +=`
        <tr>
        <td>${i+1}</td>
        <td>${elemen.content}</td>
        <td>${elemen.dueDate}</td>
        <td>${elemen.status}</td>
        <td>${elemen.assignedTo}</td>
        </tr>
        `;
    }
    document.getElementById("display").innerHTML=str;

}
display()
function add() {
    let content = document.getElementById("content").value;
    let dueDate = document.getElementById("due_date").value;
    let status = document.getElementById("status").value;
    let assignedTo = document.getElementById("assigned_to").value;
let newProduct={
    id: 3,
    content,
    dueDate,
    status,
    assignedTo
};

}