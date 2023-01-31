import styled from "styled-components";


export const movieContainer = styled.div`
    width: 250px;
    margin: 16px;
    background-color: #373b69;
    color: white;
    border-radius: 5px;

    & > img {
        max-width: 100%;
    }
`

export const movieInfo = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #373b69;
    & h4 {
        margin: 0;
        background-color: transparent;
    };
    & span {
        margin-left: 3px;
        background-color: transparent;
        };
`


// export const appContainer = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
// `