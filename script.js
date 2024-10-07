const input = document.querySelector("input");
const addBtn = document.querySelector(".add__btn");

input.addEventListener("submit", function (event) {
  event.preventDefault();
  const personName = document.querySelector("#personName").value;
});

addBtn.addEventListener("click", function () {
  // Создаем элементы и присваиваем им соответствующие классы
  let taskEdit = "Edit";
  let taskDelete = "Delete";
  let listBox = document.querySelector(".list__box");
  let taskBox = document.createElement("div");
  taskBox.classList.add("task__container");
  let taskText = document.createElement("div");
  taskText.classList.add("task__text");
  let editBtn = document.createElement("button");
  editBtn.classList.add("edit__btn");
  editBtn.textContent = taskEdit;
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete__btn");
  deleteBtn.textContent = taskDelete;
  listBox.appendChild(taskBox);
  taskBox.appendChild(taskText);
  taskBox.appendChild(editBtn);
  taskBox.appendChild(deleteBtn);

  taskText.innerText = input.value;
  input.value = "";
  console.log(taskText.innerText);
});
