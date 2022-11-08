import { createSlice } from '@reduxjs/toolkit';

const readLocalStorage = ()=> {
   const todoListData = window.localStorage.getItem('todoList');
   if(todoListData) return JSON.parse(todoListData);
}

const initialState = {
   todoList: [
      {id: 1, title: 'Task 1', category: 'no-category', time: '11/1/2022'},
      {id: 2, title: 'Task 2', category: 'work', time: '11/5/2022'},
   ],
}

const todoSlice = createSlice({
   name: 'todo-list',
   initialState,
   reducers: {
      addToDo(state, actions) {
         state.todoList.push(actions.payload)
      }
   }
})

export const selectAllTodo = state => state.todo.todoList;
export const { addToDo } = todoSlice.actions;
export default todoSlice.reducer;