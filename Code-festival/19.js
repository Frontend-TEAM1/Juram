// # 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.


function myResult(a, b) {
    for(let i = 0 ; i < b ; i++) {
        a *= a;
        console.log(a);
    }
}

console.log(myResult(2, 3));
