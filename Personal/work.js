/* 
1.페이지가 로딩 될 때 이곳의 글씨를 변경하시오.
    window.onload = function() {      // 실행되기 전에 읽고 시작(단순하게 DOM 객체를 활용할 때는 사용X)
        const $changedTxt = document.getElementById('display').children[0].children[0];
        console.log($changedTxt);
        $changedTxt.innerHTML = "글씨 변경됨"
    }
*/

/*
2.탭을 선택하면 선택한 탭의 배경과 글자의색이 바뀌도록 하시오
    click이벤트 탭 마다 붙여주고 this 이벤트 받아서 변경시키자.
    만약 클릭이 바뀌면 나머지는 선택해제
*/

const $tabs = document.querySelector(".tab_host").children;
console.log($tabs);
const $tabText = document.querySelector(".tab_body").children;
console.log($tabText);

for (let el of $tabs) {
  el.addEventListener("click", changeTabs);
}

function changeTabs(e) {
  for (let el of $tabs) {
    el.style.backgroundColor = "white";
    el.style.color = "black";
  }

  this.style.backgroundColor = "grey";
  this.style.color = "yellow";
  /*
  3. 위의 탭 클릭시 아래의 컨텐츠중 탭과 숫자가 같은 것만 보이게 하시오.
    탭이 click 되었을 때 컨텐츠와 동일한 글자만 보이게 하고 나머지는 안보이게하기
  */
  for (let item of $tabText) {
    if (item.id === this.innerText) {
      item.style.visibility = "";
    } else {
      item.style.visibility = "hidden";
    }
  }
}

/*
4. 아래의 입력창에 숫자가 입력되지 않도록 하고 길이 제한은 10자로 하시오.
    숫자가 입력된다면 숫자가 입력되었다고 alert로 알려주시오
*/

const $input = document.getElementById('te_input');
$input.maxLength = 10;

$input.addEventListener('onkeypress', numberCheck);

function numberCheck(e) {
    console.log(e.test);
    if(e.data != (/[^a-z]/gi || /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g)) {
        alert('숫자가 입력되었습니다.');
        }
        // 정규표현식 망해라
}

/*
5.아래의 입력창에 입력 후 저장 버튼을 누르거나 엔터키를 누르면 입력한 내용이 아래의 list에 추가 되도록 하시오. 
  초기화 버튼을 누르면list안의 모든 내용이 지워져야 함
*/

const $form = document.querySelector('#form');
// const $listInput = document.querySelector('#list_data');
// const $saveBtn = document.querySelector('#send');
const $list = document.querySelector('#list');

$form.addEventListener('submit', addList);


function addList(e) {
    e.preventDefault();
    const newList = document.createElement('li');
    newList.innerHTML = `${this.children[0].value}`;
    $list.append(newList);
    this.children[0].value = '';
}

function reset_list() {
    $list.innerHTML = '';
}