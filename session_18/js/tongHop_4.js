let count = 1

class Manager {
    course;
    progress;

    constructor(course, progress) {
        this.id = count++;
        this.course = course;
        this.progress = progress;
    }
}

let company = [];

let courseNameA = new Manager("HTML", false);
let courseNameB = new Manager("CSS", false);
let courseNameC = new Manager("Basic of javascript", false);
let courseNameD = new Manager("Node package Manager", false);
company.push(courseNameA, courseNameB, courseNameC, courseNameD)


function findIndex(id) {
    let findIndex = company.findIndex(value => value.id == id);
    return findIndex;
}
let state = true
while (state) {
    let input = prompt(
        "Nhập vàoC/R/U/D/E để tiếp tục chương trình"
    ).toLocaleLowerCase();

    if (input == "c") {
        // Thêm mới khóa học
        let courseName = prompt("Nhập tên khóa học muốn thêm");
        let progressAssessment = prompt("Nhập tên khóa học muốn thêm");

        let newStaff = new Manager(courseName, progressAssessment)
        company.push(newStaff);

    }else if (input == "r"){
        console.log(company)
    } else if (input == "u") {
        let inputUpdate = Number(prompt("Nhập vào id nhân viên muốn cập nhật"));
        let updateCourse = prompt("Nhập tên khóa học muốn thay đổi");
        let updateProgress = prompt("Nhập trạng thái muốn thay đổi");

        let index = findIndex(inputUpdate)
        company[index].course = updateCourse;
        company[index].progress = updateProgress;

    } else if (input == "d") {
        let inputDelete = Number(prompt("Nhập vào id muốn xóa"));
        let index1 = findIndex(inputDelete)
        company.splice(index1, 1);

    } else if (input = "e") {
        alert("Cảm ơn bạn đã đến với Rikkei Academy");
        state = false;
    }
}



