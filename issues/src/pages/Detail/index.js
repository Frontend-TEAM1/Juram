import { Octokit } from 'octokit';
import styled from 'styled-components';
import DetailCommentBoard from './component/Comment';
import IssueDetail from './component/Detail';

function Detail() {
  // const getIssues = async () => {
  //   const octokit = new Octokit({
  //     auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
  //   });

  //   const result = await octokit.request(
  //     'GET /repos/angular/angular-cli/issues',
  //     {
  //       owner: 'OWNER',
  //       state: 'open',
  //       repo: 'angular-cli',
  //       per_page: 10,
  //       page: 1,
  //     }
  //   );

  //   console.log(result);
  // };
  return (
    <S.Wrapper>
      <IssueDetail />
      <DetailCommentBoard />
    </S.Wrapper>
  );
}

export default Detail;

const Wrapper = styled.div`
  width: 80%;
  padding: 50px;
  /* border: 1px dotted purple; */
  margin: 0 auto;
  box-shadow: 0 5px 18px -10px rgba(0, 0, 0, 0.7);
`;

const S = {
  Wrapper,
};
