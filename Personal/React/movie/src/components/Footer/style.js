import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    padding: 50px 150px;
    margin-bottom: 100px;
    margin-top: 50px;
    background-color: #22254b;
    color: white;
    border-top: 1px solid darkviolet;
`;

export const FooterMenu = styled.div`
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    & button {
        border: none;
        background-color: darkgray;
        height: 50px;
        width: 200px;
        
        :hover {
            background-color: darkkhaki;
        }
    }
`;
