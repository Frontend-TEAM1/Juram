import styled from 'styled-components';

function CardShowOption() {
  return (
    <S.Wrapper>
      <select>
        <option>10개씩</option>
        <option>20개씩</option>
        <option>50개씩</option>
      </select>
    </S.Wrapper>
  );
}

export default CardShowOption;

const Wrapper = styled.span`
  background-color: orange;
`;

const S = {
  Wrapper,
};
