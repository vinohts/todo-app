function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (const task of tasks) {
      addTask(task.text, task.completed);
    }
  }
  
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
      tasks.push({
        text: li.firstChild.textContent,
        completed: li.style.textDecoration === 'line-through'
      });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function addTask(taskText = null, completed = false) {
    const taskInput = document.getElementById('taskInput');
    const text = taskText || taskInput.value.trim();
    if (text === '') return;
  
    const li = document.createElement('li');
    li.textContent = text;
  
    li.style.textDecoration = completed ? 'line-through' : 'none';
  
    li.onclick = () => {
      li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
      saveTasks();
    };
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      li.remove();
      saveTasks();
    };
  
    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    if (!taskText) taskInput.value = '';
  
    saveTasks();
  }
  
  window.onload = loadTasks;
  