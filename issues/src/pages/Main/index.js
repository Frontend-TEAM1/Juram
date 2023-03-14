import { Octokit } from 'octokit';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from './component/Card';
import Filtering from './component/Filtering';

function Main() {
  const issue = useSelector((state) => state.issues);
  const navigate = useNavigate();
  // const getIssues = async () => {
  //   const octokit = new Octokit({
  //     auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
  //   });

  //   const result = await octokit.request(
  //     'GET /repos/angular/angular-cli/issues',
  //     {
  //       owner: 'OWNER',
  //       repo: 'angular-cli',
  //       state: 'open',
  //       per_page: 10,
  //       page: 1,
  //     }
  //   );

  //   console.log(result);
  // };
  // getIssues();
  // console.log('되고있음');

  // console.log(issue);
  // issue 길이만큼 Card 컴포넌트 맵돌리기

  return (
    <>
      <Filtering></Filtering>
      <S.Wrapper>
        <Card onClick={() => console.log('옮기자')} />
        {/* <Card onClick={() => navigate(`/issue/${issue.id}`)} /> */}
      </S.Wrapper>
    </>
  );
}

export default Main;

const Wrapper = styled.div`
  width: 80%;
  padding: 50px;
  border: 1px dotted purple;
  margin: 0 auto;
`;

const S = {
  Wrapper,
};
