
// Requirement
// 모달창 보이기 상태를 버튼 클릭으로 컨트롤해야한다
// 전역으로 관리 되어야하고 context만 사용해야함 reducer는 제외

import { createContext, useContext, useState } from "react";


export const ModalContext = createContext();
export const useModalContext = () => useContext(ModalContext);


const ModalProvider = ({ children }) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;