import styled from 'styled-components';

function Filtering() {
  return (
    <S.Wrapper>
      <select>
        <option>최신순</option>
        <option>댓글순</option>
        <option>생성순</option>
      </select>
    </S.Wrapper>
  );
}

export default Filtering;

const Wrapper = styled.div`
  background-color: orange;
  height: 30px;
  width: 100%;
`;

const S = {
  Wrapper,
};
