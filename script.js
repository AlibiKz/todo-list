const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let count = 0;

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const list = document.createElement("li");
    list.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.style.marginLeft = "10px";

    // Удаление по клику на <li>
    list.addEventListener("click", function () {
      taskList.removeChild(list);
      count--;
      taskCount.textContent = count;
    });

    // Обработчик для удаления
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(list); // Удаляем <li>
      count--; // Уменьшаем счётчик
      taskCount.textContent = count; // Обновляем отображение
    });

    list.appendChild(deleteBtn); // Добавляем кнопку внутрь <li>
    taskList.appendChild(list);

    taskInput.value = "";
    count++;
    taskCount.textContent = count;
  } else {
    alert("Введите задачу");
  }
});
