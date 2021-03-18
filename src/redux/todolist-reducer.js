const ADD_TODO = 'ADD-TODO',
        REMOVE_TODO = 'REMOVE-TODO',
        UPDATE_TODO = 'UPDATE-TODO'




let initialState = {
    list:[]
}



export default function todoReducer (state  = initialState, action) {

    switch (action.type) {
        case ADD_TODO:
            let newTodo = {
                id: action.id,
                title: action.newToDoList

            }
            return {...state,
                list: [...state.list, newTodo],

            }
        case REMOVE_TODO: {
            return  {...state,list: state.list.filter((list, id) => id !== action.payload)}
        }
        case UPDATE_TODO:
            return {...state,
                list: [...state.list.map(list => list.id === action.payload.id ? {...list, title: action.payload.title } : list)]
            }

        default:
            return state
    }
}

let idx = 0
export const addNewToDo = (newToDoList) => ({type: ADD_TODO, newToDoList, id : idx++});
export const removeToDo = (id) => ({type: REMOVE_TODO, payload: id});
export const updateTodo = (id,title) => ({type: UPDATE_TODO, payload : {id : id, title : title}})


