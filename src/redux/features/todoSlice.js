import { createSlice } from '@reduxjs/toolkit';

const readLocalStorage = ()=> {
   const todoListData = window.localStorage.getItem('todoList');
   if(todoListData) return JSON.parse(todoListData);

   // There is no item
   window.localStorage.setItem('todoList', JSON.stringify([]));
   return [];
}

const initialState = {
   todoList: readLocalStorage(),
}

const todoSlice = createSlice({
   name: 'todo-list',
   initialState,
   reducers: {
      addToDo(state, actions) {
         state.todoList.push(actions.payload);
         const todoListData = window.localStorage.getItem('todoList');
         // if there was a list before
         if(todoListData) {
            const todoListArray = JSON.parse(todoListData);
            todoListArray.push({...actions.payload});
            window.localStorage.setItem('todoList', JSON.stringify(todoListArray));
         }
         // If it is the first item
         else {
            window.localStorage.setItem('todoList', JSON.stringify([{...actions.payload}]))
         }
      },
      deleteToDo(state, actions) {
         const todoListData = window.localStorage.getItem('todoList');
         // if there was a list before
         if(todoListData) {
            const todoListArray = JSON.parse(todoListData);
            todoListArray.forEach((todo, i) => {
               if(todo.id === actions.payload) {
                  todoListArray.splice(i, 1)
               }
            });
            window.localStorage.setItem('todoList', JSON.stringify(todoListArray));
            state.todoList = todoListArray;
         }
      }
   }
})

export const selectAllTodo = state => state.todo.todoList;
export const { addToDo, deleteToDo } = todoSlice.actions;
export default todoSlice.reducer;