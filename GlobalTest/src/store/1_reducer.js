
// const initialState = [
//     { id: 1, name: "피자 도우", price: 1000 },
//     { id: 2, name: "토마토 소스", price: 500 },
//     { id: 3, name: "치즈", price: 1000 },
//     { id: 4, name: "피망", price: 500 },
//     { id: 5, name: "양파", price: 500 },
//   ];

export const pizzaReducer = (state, action) => {

    switch(action.type) {
        case "ADD":
            const newIngredient = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
              }
            // return initialState.push(newIngredient);
            return [...state, newIngredient]
        case "DELETE":
            console.log(state)
            const newList = state.filter((item) => (item.id !== action.payload.id));
            return newList;
        default: 
            return state;
    }
}












// export const TodoListContext = createContext();
// export const TodoDispatchContext = createContext();

// export const useTodoList = () => useContext(TodoListContext);
// export const useTodoDispatch = () => useContext(TodoDispatchContext);

// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       /*
// 		ADD_TODO를 하기위해
// 		action.payload에 어떤 데이터가 와야할까? 
// 		{title, content}
// 		{id}
// 		{res?}
// 		*/

//       return [action.payload, ...state];
//     case "DELETE_TODO":
//       //   return state.filter((todo) => todo.id !== action.payload);
//       // 객체로 안보내도 된다
//       return state.filter((todo) => todo.id !== action.payload.id);
//     case "UPDATE_TODO":
//       const newTodo = [...state];
//       const todoIndex = newTodo.findIndex(
//         (todo) => todo.id === action.payload.id
//       );
//       newTodo[todoIndex].content = action.payload.content;
//       newTodo[todoIndex].state = action.payload.state;
//       return newTodo;
//     default:
//       return state;
//   }
// };