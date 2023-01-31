import * as S from './style'

function Footer1() {
  return (
    <>
      <S.FooterContainer>
        <S.FooterMenu>
          <div>
            <div>회사소개</div>
            <div>IR</div>
            <div>채용정보</div>
          </div>
          <div>
            <div>이용약관</div>
            <div>개인정보 처리방침</div>
            <div>법적고지</div>
          </div>
          <button>예매하기</button>
        </S.FooterMenu>
      </S.FooterContainer>
    </>
  );
}

export default Footer1;
