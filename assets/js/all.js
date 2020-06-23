"use strict";

var taskInput = document.querySelector("#taskInput");
var taskAdd = document.querySelector("#taskAdd");
var taskRemoveAll = document.querySelector("#taskRemoveAll");
var taskList = document.querySelector(".taskList");
var deadLine = document.querySelector("#deadLine");
taskAdd.addEventListener("click", addTask, false);
taskRemoveAll.addEventListener("click", removeAllTask, false);
var data = [];

function addTask(e) {
  e.preventDefault();
  data.push({
    text: taskInput.value,
    deadline: deadLine.value
  });
  taskInput.value = '';
  deadLine.value = '';
  render();
}

function removeTask(e) {
  e.preventDefault();
  data.splice(e.target.dataset.i, 1);
  console.log(e.target.dataset.i, 1);
  render();
}

function render() {
  var string = '';
  data.forEach(function (item, i) {
    string += "\n      <tr>\n        <th scope=\"row\" class=\"text-center\">".concat(i + 1, "</th>\n        <td>").concat(item.text, "</td>\n        <td class=\"text-center\">").concat(item.deadline, "</td>\n        <td class=\"text-center\"><button class=\"taskRemove text-center border-0\">\u522A\u9664\u4EFB\u52D9</button></td>\n      </tr>");
  });
  taskList.innerHTML = string;
  var taskRemove = document.querySelectorAll(".taskRemove");
  taskRemove.forEach(function (item) {
    item.addEventListener("click", removeTask, false);
  });
}

function removeAllTask(e) {
  e.preventDefault();
  data = [];
  render();
}
//# sourceMappingURL=all.js.map
