const inputTodo = document.getElementById("input_todo") // giữ liên kết với ô nhập liệu
let idGlobal = null; // khai báo biến toàn cục để lưu id công việc cần sửa

// hàm vẽ ra giao diện
function read() {
    // dấu || dùng cho nhiều phần tử, cái nào đúng thì lấy
    const todos = JSON.parse(localStorage.getItem("bt1_todo")) || []

    let stringHTMl = ""
    todos.forEach(todo => {
        stringHTMl +=
            `
            <li>
                <div>
                <input onclick="changeId(${todo.id}, '${todo.name}')" type="radio" name="todo">
                <span class="text">${todo.name}</span>
                </div>
                <button onclick="del(${todo.id})"><i class="fa-solid fa-circle-xmark"></i></button>
            </li>
        `
    });
    document.getElementById("lists").innerHTML = stringHTMl
}
read()

// vừa add vừa update
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault()

    const todos = JSON.parse(localStorage.getItem("bt1_todo")) || []

    // (2) thực hiện công việc update
    if (idGlobal != null) {
        const index = todos.findIndex(todo => todo.id == idGlobal)
        todos[index].name = inputTodo.value
        localStorage.setItem("bt1_todo", JSON.stringify(todos))
        read()
        inputTodo.value = ""
        idGlobal = null
        return
    }
    // ========= hết update ========================================

    // thực hiện công việc add
    let id = null
    if (todos.length == 0) {
        id = 1
    } else {
        id = todos[todos.length - 1].id + 1
    }

    const todo = {
        id,// id: id
        name: inputTodo.value
    }
    todos.push(todo)
    localStorage.setItem("bt1_todo", JSON.stringify(todos))
    read()
    inputTodo.value = ""
    // ========= hết add ========================================
})

// hàm xóa
function del(id) {
    let todos = JSON.parse(localStorage.getItem("bt1_todo")) || []
    todos = todos.filter(todo => todo.id != id)
    localStorage.setItem("bt1_todo", JSON.stringify(todos))
    read()
}


// click radio để lưu thông tin nơi cần update (1) edit
function changeId(id, name) {
    idGlobal = id
    inputTodo.value = name
}