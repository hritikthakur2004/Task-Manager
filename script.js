function openCards() {
  let allelem = document.querySelectorAll(".elem");
  let btn = document.querySelectorAll(".backbutton");
  let fullallelem = document.querySelectorAll(".fullElem");
  allelem.forEach((element) => {
    element.addEventListener("click", () => {
      fullallelem[element.id].style.display = "block";
    });
  });
  btn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullallelem[back.id].style.display = "none";
    });
  });
}
openCards();
let inputtask = document.querySelector(".addTask form input");
let inputtextarea = document.querySelector(".addTask form textarea");
let taskform = document.querySelector(".addTask form");
let checkbox = document.querySelector(".addTask form .mark input");

let Taskper = document.querySelector(".task");

let currentTasks = [];
if (localStorage.getItem("currentTasks")) {
  currentTasks = JSON.parse(localStorage.getItem('currentTasks'))
} else {
  
  console.log("hello");
}

function renderTask() {
  let allTasks = document.querySelector(".allTask");
  let clutter = "";

  currentTasks.forEach(function (elem) {
    clutter += `  <div class="task">
                          <h5>${elem.task} <span class = "${elem.checked}">imp</span></h5>
                        <button>Mark As Completed</button>

                    </div>`;
  });
  allTasks.innerHTML = clutter;
}
renderTask()

taskform.addEventListener("submit", function (event) {
  event.preventDefault();
  currentTasks.push({
    task: inputtask.value,
    details: inputtextarea.value,
    checked: checkbox.checked,
  });
  localStorage.setItem('currentTasks',JSON.stringify(currentTasks))
   inputtask.value = ''
    inputtextarea.value = ''
   checkbox.checked  = false;
  renderTask();
});
