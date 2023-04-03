import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <S.Post>
        <img src='Assets/theater.png' alt='theater'></img>
        <span>
          LET'S WATCH MOVIE <br></br>
          <span>TOGETHER</span>
        </span>
      </S.Post>
    </>
  );
};

export default Main;

const Post = styled.div`
  width: 100%;
  height: 40%;
  position: relative;
  > img {
    width: 100%;
    position: absolute;
  }
  > span {
    color: white;
    font-size: 80px;
    font-weight: bold;
    position: absolute;
  }
`;

const S = {
  Post,
};
