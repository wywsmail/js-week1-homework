"use strict";

var taskInput = document.querySelector("#taskInput");
var taskAdd = document.querySelector("#taskAdd");
var taskRemoveAll = document.querySelector("#taskRemoveAll");
var taskList = document.querySelector(".taskList");
var deadLine = document.querySelector("#deadLine"); // let done = document.querySelectorAll(".done");

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
    string += "\n      <tr>\n        <th scope=\"row\" class=\"text-center\">".concat(i + 1, "</th>\n        <td>").concat(item.text, "</td>\n        <td class=\"text-center\">").concat(item.deadline, "</td>\n        <td class=\"text-center\">\n          <input type=\"checkbox\" class=\"done\" data-i=\"").concat(i, "\" ").concat(item.done, ">\n        </td>\n        <td class=\"text-center\"><button class=\"taskRemove text-center border-0\" data-i=\"").concat(i, "\">\u522A\u9664\u4EFB\u52D9</button></td>\n      </tr>");
  });
  taskList.innerHTML = string;
  var taskRemove = document.querySelectorAll(".taskRemove");
  taskRemove.forEach(function (item) {
    item.addEventListener("click", removeTask, false);
  });
  var taskDone = document.querySelectorAll(".done");
  taskDone.forEach(function (item) {
    item.addEventListener("click", doneTask, false);
  });
}

function removeAllTask(e) {
  e.preventDefault();
  data = [];
  render();
}

function doneTask(e) {
  e.preventDefault();
  data[e.target.dataset.i].done = 'checked';
  console.log(e.target.dataset.i);
  render();
}
//# sourceMappingURL=all.js.map
