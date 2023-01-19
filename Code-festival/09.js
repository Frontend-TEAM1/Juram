// concat을 활용한 출력 방법
// 다음 소스코드를 완성하여 날짜와 시간을 출력하시오.

let year = '2019';
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

let result = year.concat('/').concat(month).concat('/').concat(day).concat(' ').concat(hour).concat(':').concat(minute).concat(':').concat(second);

console.log(result); // 2019/04/26 11:34:27