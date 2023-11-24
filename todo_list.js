class TodoList {
    constructor() {
      this.tasks = []; 
    }
  
    addTask(taskDescription) {
      const newTask = {
        description: taskDescription,
        completed: false,
      };
      this.tasks.push(newTask);
    }
  
    markTaskAsCompleted(taskDescription) {
      for (const task of this.tasks) {
        if (task.description === taskDescription) {
          task.completed = true;
          break; 
        }
      }
    }
  
    displayTasks() {
      console.log('\nTodo List:');
      for (const task of this.tasks) {
        const completionStatus = task.completed ? '[Completed]' : '[Incomplete]';
        console.log(`${completionStatus} ${task.description}`);
      }
    }
  }
  
  const todoList = new TodoList();
  
  todoList.addTask('Finish homework');
  todoList.addTask('Send email to client');
  
  todoList.markTaskAsCompleted('Send email to client');

  todoList.displayTasks();
  