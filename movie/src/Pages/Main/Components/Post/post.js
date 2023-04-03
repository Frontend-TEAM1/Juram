import styled from "styled-components";

const Post = () => {
  return (
    <S.PostImg>
      <img src="Assets/theater.png" alt="theater"></img>
      <S.PostText>
        LET'S WATCH MOVIE <br />
        <span>TOGETHER</span>
      </S.PostText>
    </S.PostImg>
  );
};

export default Post;

const PostImg = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 700px;
  position: relative;
  display: flex;
  border: 1px solid aqua;
  z-index: 99;
  > img {
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
  }
`;

const PostText = styled.div`
  color: white;
  font-size: 80px;
  font-weight: bold;
  line-height: 100px;
  padding: 200px;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: none;
  > span {
    color: orange;
    background: none;
  }
`;

const S = {
  PostImg,
  PostText,
};
