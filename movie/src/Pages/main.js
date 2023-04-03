import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <S.Post>
        <img src='Assets/theater.png' alt='theater'></img>
        <PostText>
          LET'S WATCH MOVIE <br />
          <span>TOGETHER</span>
        </PostText>
      </S.Post>
    </>
  );
};

export default Main;

const Post = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 30%;
  position: relative;
  display: flex;
  > img {
    width: 100%;
    position: absolute;
  }
`;

const PostText = styled.div`
  color: white;
  font-size: 80px;
  font-weight: bold;
  line-height: 100px;
  padding: 100px 200px;
  position: absolute;
  align-items: center;
  justify-content: center;
  > span {
    color: orange;
  }
`;

const S = {
  Post,
  PostText,
};
