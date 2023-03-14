import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <S.Wrapper>
        <img
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
          }
          style={{ width: '30px', height: '30px' }}
          onClick={() => navigate('/')}
        />
        ISSUES
      </S.Wrapper>
      <Outlet />
    </>
  );
}
export default Header;

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 50px;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const S = {
  Wrapper,
};
