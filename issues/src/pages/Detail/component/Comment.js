import styled from 'styled-components';

function DetailCommentBoard() {
  return (
    <S.Wrapper>
      <S.Board>
        맵을 돌리자~~ 만약 댓글 없으면 '댓글이 없습니다' 띄우기 추가도
        구현해야하나?
      </S.Board>
    </S.Wrapper>
  );
}

export default DetailCommentBoard;

const Wrapper = styled.div`
  width: 80%;
  padding: 50px;
  border: 1px dotted purple;
  margin: 0 auto;
`;

const Board = styled.div`
  width: 80%;
  border: 1px solid red;
  margin: 0 auto;
`;

const S = {
  Wrapper,
  Board,
};
