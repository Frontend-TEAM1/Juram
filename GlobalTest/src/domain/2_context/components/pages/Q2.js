import { useContext, useReducer, useState } from "react";
import NavigateButton from "../../../../components/NavigateButton";
import UserProvider, {
  UserContext,
  userReducer,
  useUserContext,
} from "../../../../store/3_context";
import ContextQ2Form from "../atom/Q2/Form";
import ContextQ2Form3 from "../atom/Q2/Form3";

const ContextQ2Page = () => {
  /* 문제 2 - 2
      1. Form1에서 값을 입력하면 userList에 데이터가 추가되도록 구현해보세요
      2. Form2에서 버튼을 클릭하면 userList의 각 요소에 isEdit: true의 속성이 추가되도록 구현해보세요
      3. Form3에서 reset 버튼을 클릭하면 userList를 초기화 시키도록 구현해보세요
      4. 제출 버튼을 누르면 isEdit true인 userList만 console.log로 출력해보세요 (단, isEdit이 true인 데이터도 전역으로 관리해주세요.) 
        
      단, userList 상태 관리는 전역으로 관리하고 비즈니스 로직도 분리하기 위해 useReducer, useContext를 사용하여 구현해보세요
      (일반 state를 사용하는 문제가 아니기 때문에 전역으로 상태관리를 할 수 있도록 해주세요) 관련 로직은 src/store/3_context.js에 구현해주세요*/


// ---------------------------REQUIREMENT---------------------------


  /* <구현 순서>
        1. createContext(); context만들기(3_context.js)
        2. Provider에 value로 전역으로 사용할 요소 전달하기 users, dispatch
        3. 각 전달 받은 요소 사용하는 파일 위치에서 같이 만들어 둔 useUserContext(); 사용해서 가용상태 만들어두기
        4. 그 요소에 접근해서 나머지 기능 구현
    ...............................................
     <힘들었던 점>
        1. props로 전달하는거를 최소화하는게 좋은가? 아니면 비지니스 로직이 한군데에 있는게 좋은가?
        2. isEdit을 전역으로 관리하라는 말이 뭐지?
        3. return으로 하면 원본 배열인 state는 변하지 않는건가?? 변해야하는건가? 
        4. 음 submit을 2번 눌렀을 떄 어떻게 해야하나 */


  const [users, dispatch] = useReducer(userReducer, [
    { id: 1, name: "홍길동", nickname: "히히" },
  ]);
  console.log(users);

  return (
    <UserContext.Provider value={{users, dispatch}}>
      <h2>문제 2 - 2</h2>
      <ContextQ2Form/>
      <ContextQ2Form3 />
      <div
        style={{
          marginTop: "32px",
        }}
      >
        <button onClick={() => dispatch({ type: 'SUBMIT' })}>SUBMIT</button>
      </div>
      <NavigateButton to={"/3_redux/q1"} />
    </UserContext.Provider>
  );
};
export default ContextQ2Page;
