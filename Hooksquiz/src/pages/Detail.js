import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import productList from "../__mock__/products.json";

function DetailPage() {
  const { productNumber } = useParams();
  const myProduct = productList.products.filter(
    (item) => item.productNumber === productNumber
  );
  const productRef = useRef(myProduct);
  const [render, setRender] = useState(false);

  const {
    productName,
    productPrice,
    productRating,
    productSize,
    productDetail,
    Review,
  } = productRef.current[0];

  let myComment;
  let myRate;

  const addComment = () => {
    const newList = {
      'reviewer' : "글쓴이",
      'review' : myComment,
      'rating' : myRate
    }
    Review.push(newList);
    setRender(true);

    }



  return (
    <S.Wrapper>
      <S.Container>
        <span style={{ fontWeight: 700, fontSize: "30px" }}>{productName}</span>
        <div>{productDetail.productDetailInfo}</div>
        <S.Blank></S.Blank>
        <span>
          가격 : {productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <br />
        </span>
        <span>
          현재 재고 사이즈 : {productSize}
          <br />
        </span>
        <span>평점 : {productRating}</span>
        <S.Blank></S.Blank>
        {Review.map((review) => (
          <S.Comment>
            <div style={{ color: 'grey', width: '150px'}}>작성자 : {review.reviewer}</div>
            <div style={{ color: 'grey', width: '150px' }}>평점 : {review.rating}</div>
            <div style={{ fontWeight: 700, fontSize: '20px', width: '150px'}}>{review.review}</div>
          </S.Comment>
        ))}
      </S.Container>
      <S.Input>
        <input onChange={ e => myComment = e.target.value} placeholder="후기를 입력해주세요."></input>
        <div>
        <input onChange={ e => myRate = e.target.value} placeholder="평점"></input>
        <button onClick={addComment}>완료</button>
        </div>
      </S.Input>
    </S.Wrapper>
  );
}
export default DetailPage;

const Wrapper = styled.div`
padding-top: 100px;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  background-color: #002266;
  padding: 50px 0;
  width: 70%;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Blank = styled.div`
  width: 100%;
  margin: 30px 0;
`;

const Comment = styled.div`
  width: 60%;
  background-color: #F9F9F9;
  color: black;
  margin: 5px 0;
  padding: 20px;
  line-height: 30px;
  display: flex;
  justify-content: space-between
`;

const Input = styled.div`
  margin-top: 20px;
  border: 1px dashed grey;
  border-radius: 10px;
  padding: 20px 50px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  > input {
    width: 85%;
    padding: 0 15px;
    font-size: 15px;
    height: 60px
  }
  > div > input {
    width: 30px;
    height: 20px;
    padding: 0 5px;
    margin-bottom: 10px;
  }
  > button {
    width: 50px;
    height: 30px;
    padding: 0;
    border: none;
    border-radius: 5px;
    background-color: orange;
  }
`;

const S = {
  Wrapper,
  Container,
  Blank,
  Comment,
  Input,
};
