const newTask = {
    tasks: [
        { 
            id: 1, 
            name: 'тест', 
            description: 'описание',
            order: 0
        }
    ]
};


const taskManager = {
    addTask(task) {
        this.tasks.push(task);
    },
    updateTask(id, newData) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            Object.assign(task, newData);
        }
    },
    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    },
    sortTasks() {
        this.tasks.sort((a, b) => a.order - b.order);
    }
};


// Добавляем новую задачу
taskManager.addTask.call(newTask, {
    id: 2,
    name: 'тест2',
    description: 'описание2',
    order: 1
});

// Обновляем задачу с id = 1
taskManager.updateTask.call(newTask, 1, {
    name: 'тест обновлённый',
    order: 2
});

// Сортируем задачи по order
taskManager.sortTasks.call(newTask);

// Удаляем задачу с id = 2
taskManager.deleteTask.call(newTask, 2);

// Проверяем результат
console.log(newTask.tasks);
