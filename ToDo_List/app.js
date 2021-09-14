let choice = prompt('What would you like to do?');
const todos = ['Write todo list']; // Initialise the array of tasks

while (choice !== 'quit') {
    if (choice === 'new') {
        todos.push(prompt('Add a new task'));
        console.log(`${todos[todos.length - 1]} added to list`)
    } else if (choice === 'list') {
        console.log('*******************');
        for (task of todos) {
            console.log(`${todos.indexOf(task)}: ${task}`);
        }
        console.log('*******************');
    } else if (choice === 'delete') {
        todos.splice(prompt('Enter the index of the todo you wish to delete'), 1);
        console.log('Todo deleted.');
    }
    choice = prompt('What would you like to do next?');
}