import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Card() {
  const issue = useSelector((state) => state.issues);
  console.log(issue);
  return (
    <S.Container>
      <S.Header>
        <span>issue.number</span>
        <span>issue.created_at</span>
      </S.Header>
      <S.Body>
        issue.Title issue.Title issue.Title
        <br />
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body ...
        <br />
        issue.comments ?
        <br />
      </S.Body>
      <S.Bottom>
        <span>issue.state</span>
        <span>issue.user.login(별명)</span>
      </S.Bottom>
    </S.Container>
  );
}
export default Card;

const Container = styled.div`
  width: 30%;
  border: 1px dashed grey;
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

const Body = styled.div`
  width: 100%;
  padding: 5px 0;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

const S = {
  Container,
  Header,
  Body,
  Bottom,
};
