import { useState } from "react";
import NavigateButton from "../../../../components/NavigateButton";
import ContextQ1Detail from "../atom/Q1/Detail";
import ContextQ1Modal from "../atom/Q1/Modal";
import ModalProvider, { ModalContext, useModalContext } from '../../../../store/2_context'

const ContextQ1Page = () => {
  /* 문제 2-1) 전역 모달창 띄우기
      1) ContextQ1Detail, ContextQ1Detail2 두 컴포넌트의 보이기 버튼이 눌려야만 모달창이 보여야 합니다.
         모달창이 보이는 상태일 때는 숨기기 텍스트로 바뀌어 모달창을 닫을 수 있어야 합니다.
      2) 모달창은 현재 위치인 Detail 컴포넌트의 가장 바깥쪽 div에 렌더링 되어야 합니다.
      3) 모달창은 ContextQ1Modal 컴포넌트를 사용합니다.
      4) 모달의 state는 useContext를 사용하여 관리합니다. (props를 사용하지 않습니다.)
      5) 단, useReducer를 사용하지 않고 state만을 관리합니다. (useReducer는 다음 문제에서 사용합니다.)
          src/stor/2_context.js 파일에 context를 구현해주세요 
          위의 상태를 전역으로 관리하여 ContextQ1Detail, ContextQ1Detail2 두 컴포넌트의 보이기 버튼이 눌려도 모달창이 열릴 수 있도록 해주세요 :)*/

// ---------------------------REQUIREMENT---------------------------


  /* <구현 순서>
        1. createContext(); context만들기(2_context.js)
        2. Provider에 value로 전역으로 사용할 요소 전달하기
        3. 각 전달 받은 요소 사용하는 파일 위치에서 같이 만들어 둔 useModalContext(); 사용해서 가용상태 만들어두기
        4. 그 요소에 접근해서 나머지 기능 구현
    ...............................................
     <힘들었던 점>
        1. 왜 Provider가 함수형으로 createContext()한 위치에서 만들어서 export 후 사용하는 방식은 적용이 안되는 걸까??\
        2. value로 전달하는 값 중 {...} [...] 객체와 배열로 넘겨주는 차이  
        3. const [isModalOpen, setIsModalOpen] = useModalContext();는 왜 안되는 것인가  
        4. Detail.js에서 클릭할 때 마다 T <-> F 바꿔주는 기능 구현 왜 안되지? (prev) => !prev  
        5. createContext()가 따로 파일로 빠져 있는 이유는 뭐지? 그냥 Q1.js에 같이 구현하면 되는거 아닌가  */
 

  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);

  // const [isModalOpen, setIsModalOpen] = useModalContext();

  return (
    
    <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>
      {isModalOpen && <ContextQ1Modal />}
      <h2>문제 2 - 1</h2>
      <ContextQ1Detail />
      <NavigateButton to={"/2_context/q2"} />
    </ModalContext.Provider>
  );
};
export default ContextQ1Page;
