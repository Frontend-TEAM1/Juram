import styled from 'styled-components';

function IssueDetail() {
  return (
    <S.Wrapper>
      <S.Title>issue.title</S.Title>
      <br />
      <S.Info>
        <span>issue.state</span>
        <span>issue.created_at</span>
        <span>issue.user.login</span>
      </S.Info>
      <br />
      <S.Content>
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body issue.body issue.body
        issue.body issue.body issue.body issue.body
      </S.Content>
    </S.Wrapper>
  );
}

export default IssueDetail;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 80px 0;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
`;

const Info = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const Content = styled.div`
  font-size: 20px;
`;

const S = {
  Wrapper,
  Title,
  Info,
  Content,
};
