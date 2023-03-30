import { FromDB } from 'Apis/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchBar = () => {
	const [searchKey, setSearchKey] = useState('');
	const [recent, setRecent] = useState([]);
	const [timer, setTimer] = useState(0);
	const [result, setResult] = useState('');
	const [render, setRender] = useState('');

	useEffect(() => {
		window.localStorage.setItem('recentSearches', JSON.stringify(recent));
		// const recentSearches =
		//    JSON.parse(localStorage.getItem('recentSearches')) || [];
		// setRecentSearches(recentSearches);
	}, []);

	const onInputChange = e => {
		e.preventDefault();
		setSearchKey(e.target.value);
	};

	useEffect(() => {
		if (!searchKey) return;
		if (timer) {
			clearTimeout(timer);
		}
		const newTimer = setTimeout(async () => {
			try {
				console.log('데이터요청');
				setResult(await FromDB(searchKey));
			} catch (err) {
				// setResult([]);
				setResult([err.response.data]);
			}
		}, 1000);
		setTimer(newTimer);
	}, [searchKey]);

	// localStorage.setItem('recentSearches', JSON.stringify(recent));

	const onSearchClick = async () => {
		const arr = JSON.parse(localStorage.getItem('recentSearches'));
		arr.unshift(searchKey);
		// const arr = [...recent];
		// const newArr = arr.unshift(searchKey);
		setRecent(arr);
		window.localStorage.setItem('recentSearches', JSON.stringify(arr));
		console.log(recent);

		setRender(JSON.parse(window.localStorage.getItem('recentSearches')));
		// setRender(newArr = JSON.parse(localStorage.getItem('recentSearches')));
		console.log(render);

		// console.log('이건arr값이야', arr);
		// console.log('이건recent값이야', recent);
		// console.log('이건searchKey값이야', searchKey);
		// localStorage.setItem('recentSearches', JSON.stringify(recent));
		// const tt = JSON.parse(localStorage.getItem('recentSearches')) || [];
		// console.log('localstorage===>', tt);
		// if (result.length === 0) {
		//    return alert('검색 결과가 없습니다.');
		// }
		// const recentSearches =
		//    JSON.parse(localStorage.getItem('recentSearches')) || [];
		// if (!recentSearches.includes(searchKey)) {
		//    //같은거를 입력하면  과거의 같은 단어를 지우고 새로 입력한 같은 단어를 최상단에
		// }
		// localStorage.setItem('recentSearches', JSON.stringify(recent));
		// console.log(localStorage);
		// setSearchKey(result);
	};

	const temp = () => {
		window.localStorage.removeItem('recentSearches');
	};

	/* debounce
   const [keyword, setKeyword] = useState('');
   const [timer, setTimer] = useState(0);

   const updateKeyword = e => {
      e.preventDefault();
      setKeyword(e.target.value);
      if (timer) {
         console.log('timer작동');
         clearTimeout(timer);
      }
      const newTimer = setTimeout(async () => {
         try {
            await Getting.getData(keyword).then(res => setResult(res.data));
            console.log('디바운스');
         } catch (err) {
            console.error(err);
         }
      }, 500);
      setTimer(newTimer);
   };
   
   */

	console.log('함수밖에서', render);

	return (
		<>
			<button onClick={temp}>캐시 날리기</button>
			<SearchBarWrapper>
				<InputContainer>
					<Input
						type="text"
						placeholder="검색어를 입력하세요."
						onChange={onInputChange}
						value={searchKey}
					/>
					<Button onClick={onSearchClick}>search</Button>
					<Result>
						<Recent>
							<span>RECENT :</span>
							{render &&
								render.map(item => (
									<Item key={Math.random()}>
										{item}
										<button>X</button>
									</Item>
								))}
						</Recent>
						{result &&
							result.map(item => <div key={Math.random()}>{item}</div>)}
					</Result>
				</InputContainer>
				{/* {recentSearches.length > 0 && (
            <RecentSearches>
               <RecentSearchesTitle>최근 검색어</RecentSearchesTitle>
               <RecentSearchesList>
                  {recentSearches.map((search, index) => (
                     <RecentSearchItem
                        key={index}
                        onClick={() => setSearchKey(search)}
                     >
                        {search}
                     </RecentSearchItem>
                  ))}
               </RecentSearchesList>
            </RecentSearches>
         )} */}
			</SearchBarWrapper>
		</>
	);
};

export default SearchBar;

const SearchBarWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const InputContainer = styled.div`
	position: relative;
`;

const Input = styled.input`
	width: auto;
	min-width: 584px;
	height: 45px;
	display: flex;
	position: absolute;
	//focus 되었을 때, border 없애기
	border: 1px solid darkgray;
	border-radius: 24px;
	padding-left: 20px;
	:focus {
		outline: none;
		/* border: none; */
	}
`;

const Button = styled.button`
	width: 70px;
	position: absolute;
	left: 515px;
	top: 14px;
	cursor: pointer;
	border: none;
	background: none;
	:hover {
		font-weight: bold;
	}
`;

const Result = styled.div`
	position: absolute;
	width: auto;
	min-width: 584px;
	height: 500px;
	border: 1px solid darkgrey;
	border-radius: 24px;
	box-shadow: none;
	z-index: -1;
	padding: 60px 20px;
`;

const Recent = styled.div`
	width: 100%;
	border: 1px solid rosybrown;
	padding-bottom: 20px;
`;

const Item = styled.span`
	padding: 5px 5px;
	margin: 10px 5px;
	background-color: lightgrey;
	border-radius: 20px;
	> button {
		background: none;
		border: none;
		cursor: pointer;
	}
`;

// const RecentSearches = styled.div`
//    margin-top: 10px;
// `;

// const RecentSearchesTitle = styled.div`
//    font-size: 14px;
//    font-weight: bold;
//    margin-bottom: 5px;
// `;

// const RecentSearchesList = styled.ul`
//    padding-left: 0;
//    margin-bottom: 0;
//    list-style: none;
// `;

// const RecentSearchItem = styled.li`
//    cursor: pointer;
//    font-size: 14px;
//    margin-bottom: 5px;
//    color: #aaa;

//    &:hover {
//       text-decoration: underline;
//    }
// `;
