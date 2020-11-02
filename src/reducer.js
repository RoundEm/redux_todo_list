import * as actions from "./actions";
import { v4 as uuid } from "uuid";

// console.log(actions);

const initialState = [
  {
    id: "dummyID",
    description: "Make redux todo app",
    completed: false
  }
];

function todoReducer(state = initialState, action) {
  console.log("action: ", action);
  switch (action.type) {
    case actions.ADD_TODO:
        return [
            ...state,
            {
                id: uuid(),
                description: action.description,
                completed: false
            }
        ];

    case actions.DELETE_TODO:
        console.log('delete')
        return state.filter((todo) => {
            return todo.id !== action.id;
        });

    case actions.MARK_TODO_COMPLETED:
        console.log('complete')
        return state.map((todo) => {
            return todo.id === action.id
                ? {
                    ...todo,
                    completed: true
                }
                : todo;
        });

    default:
        return state;
  }
}

export default todoReducer;