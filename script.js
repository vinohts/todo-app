function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.textContent = taskText;
  
    li.onclick = () => {
      li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    };
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.onclick = (e) => {
      e.stopPropagation(); // prevent marking complete on delete
      li.remove();
    };
  
    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
  }
  