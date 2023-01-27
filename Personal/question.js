// 학생들 수 3명 정도 과목 점수 입력 받아서 각 학생별 평균, 과목별 평균
// length push pop  shift unshift splice slice concat indexOf join includes / sort
// map, filter, find, findIndex, reduce

let consonant = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ"];
let vowel = ["ㅏ", "ㅑ", "ㅓ", "ㅕ"];

// consonant의 길이는?
let a = consonant.length;       // 7

// 값 추가 push() 뒤에 unshift() 앞에 추가
consonant.push("ㅇ");           // ㄱㄴㄷㄹㅁㅂㅅㅇ
vowel.unshift("A");             // Aㅏㅑㅓㅕ

// 값 삭제 pop() 뒤에 shift() 앞에 제거
let b = consonant.pop();        // ㅇ
let c = vowel.shift();          // A

// concat() 합체
consonant.concat(vowel);        // ㄱㄴㄷㄹㅁㅂㅅㅏㅑㅓㅕ

// 배열 부분잘라내기 및 삽입
let d = consonant.splice(2,2);          // ㄷㄹ
let e = consonant.splice(2,2,'a');          // ㄱㄴaㅅ  -> 원본배열 망침
console.log(consonant);

// 배열 잘라서 새 배열 생성
let f = vowel.slice(1,2);           // ㅑ

console.log(a, b, c, d, f);

// 기존배열 활용하여 새로운 배열 생성
let g = consonant.map((item) => item+'a');

console.log(g);

// 기존 배열에서 원하는 조건을 만족하는 값 찾기
console.log(g.filter((el) => el.includes('a')));

// 그 값의 인덱스 찾기
console.log(g.findIndex((el) => el.includes('ㅅ')));
