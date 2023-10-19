document.getElementById("addBtn").addEventListener("myInput", value);
document.getElementById("createElement").addEventListener("li", myInput);
  
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var checkbox = document.createElement("span");
      checkbox.className = "checkbox";
      checkbox.onclick = function() {
        toggleTask(checkbox);
      }
      var checkMark = document.createElement("span");
      checkMark.className = "check-mark";
      var t = document.createTextNode(inputValue);
      li.appendChild(checkbox);
      li.appendChild(t);
      checkbox.appendChild(checkMark);

      if (inputValue === '') {
        alert("Alahan naputtaa!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";
    }

    function toggleTask(checkbox) {
      var listItem = checkbox.parentNode;
      var checkMark = listItem.querySelector(".check-mark");
      if (listItem.classList.contains("task-done")) {
        listItem.classList.remove("task-done");
        checkMark.textContent = "";
      } else {
        listItem.classList.add("task-done");
        checkMark.textContent = "✔";
      }
    }

    function deleteCompletedTasks() {
      var completedTasks = document.querySelectorAll(".task-done");
      completedTasks.forEach(function(task) {
        task.remove();
      });
    }
