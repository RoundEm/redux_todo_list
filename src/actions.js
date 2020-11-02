const ADD_TODO = "ADD_TODO";
function addTodo(description) {
    return {
        type: ADD_TODO,
        description,
        completed: false
    };
}

const DELETE_TODO = "DELETE_TODO";
function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    };
}

const MARK_TODO_COMPLETED = "MARK_TODO_COMPLETED";
function markTodoCompleted(id) {
    return {
        type: MARK_TODO_COMPLETED,
        id,
        completed: true
    };
}

export {
    ADD_TODO,
    addTodo,
    DELETE_TODO,
    deleteTodo,
    MARK_TODO_COMPLETED,
    markTodoCompleted
};
