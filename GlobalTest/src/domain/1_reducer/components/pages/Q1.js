import React, { useReducer, useState } from "react";
import NavigateButton from "../../../../components/NavigateButton";
import { pizzaReducer } from "../../../../store/1_reducer";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";

const ReducerQ1Page = () => {
  /* 문제 1) 로직 분리하기
  
    재료 추가 로직 분리하기
      1) 재료 추가 로직 작성하기
      2) 재료 삭제 로직 작성하기

      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
          src/store/1_reducer.js에 구현해보세요*/


// ---------------------------REQUIREMENT---------------------------

  /* <구현 순서>
        1. reducer 쓰지 않고 state만으로 로직 구현하기
        2. 외부 함수(기능?) reducer 만들기(1_reducer.js)
        3. state대신 reducer로 교체하기
    ...............................................
     <힘들었던 점>
        역시나 선언 위치.. 특히 initialState 위치
        왜 헷갈리는 것일까.. 아직 개념 부족인가  */

  const [pizza, dispatch] = useReducer(pizzaReducer, [
    { id: 1, name: "피자 도우", price: 1000 },
    { id: 2, name: "토마토 소스", price: 500 },
    { id: 3, name: "치즈", price: 1000 },
    { id: 4, name: "피망", price: 500 },
    { id: 5, name: "양파", price: 500 },
  ]);

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: {
        id,
      },
    });
    // const newList = ingredients.filter((item) => (item.id !== id))
    // console.log(newList)
    // setIngredients(newList);
  };

  const onSubmit = (name, price) => {
    dispatch({
      type: "ADD",
      payload: {
        id: Math.floor(Math.random() * 10000),
        name,
        price,
      },
    });
    // const newIngredient = {
    //   id: ingredients.length + 1,
    //   name: name,
    //   price: price,
    // }
    // const newList = [...ingredients, newIngredient];
    // setIngredients(newList);
  };

  return (
    <>
      <h2>문제 1</h2>
      <table>
        <thead>
          <tr>
            <th>재료</th>
            <th>가격</th>
          </tr>
        </thead>
        <ReducerQ1List ingredients={pizza} onDelete={onDelete} />
      </table>
      <Q1Form onSubmit={onSubmit} />
      <NavigateButton isFistPage to={"/2_context/q1"} />
    </>
  );
};
export default ReducerQ1Page;
