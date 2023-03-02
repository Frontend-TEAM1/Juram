import { createContext, useContext, useReducer } from "react";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);


export const userReducer = (state, action) => {
    switch(action.type) {
        case "ADD_to_LIST":
            return [...state, {id: state.length+1, name: action.payload.name, nickname: action.payload.nickName}];

        case "ADD_EDIT_PROP":
            const newUsers = state.map((user) => ({...user, isEdit: true}))
            return newUsers;

        case "RESET":
            // const temp = [...state]
            // temp = [];
            // return temp;
            return [];

        case "SUBMIT":
            // console.log(!state);
            // console.log(state);
            if(!state) return;
            const submitList = state.filter((user) => user.isEdit === true);
            // console.log(submitList);
            if(submitList.length === 0) return console.log('리스트가 비었습니다');
            // console.log(state.filter((user) => user.isEdit === true))
            return console.log(submitList);

        default:
            return state;
    }
}

const initialState = [
    { id: 1, name: "홍길동", nickname: "히히" },
  ];

const UserProvider = ({children}) => {
    
    const [users, dispatch] = useReducer(userReducer, initialState);

      return (
        <UserContext.Provider value={{users, dispatch}}>
            {children}
        </UserContext.Provider>
      )
};

export default UserProvider;