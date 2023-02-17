//====================================================DATA==================================================
const musicListData = [
  {
    src: "./assets/iu_0.jpg",
    color: ["#0272a4", "#f6a564"],
  },
  {
    src: "./assets/iu_1.jpg",
    color: ["#b6bfc8", "#36595b"],
  },
  {
    src: "./assets/iu_2.jpg",
    color: ["#e58e82", "#6f569f"],
  },
];

//===========================================================================================================
// 비함수(변수, DOM API, 즉시실행문)
let currentIndex = 0;
let playStatus = false;
let selected = false;
const $album = document.querySelector("#ls");
const songs = $album.children;
const $diskInner = document.querySelector(".disk_inner");
const $main = document.getElementById("main");
const $playBtn = document.querySelector('.play_btn_group > button:first-child');
const $stopBtn = document.querySelector('.play_btn_group > button:last-child');
const $prev = document.querySelectorAll(".btns")[0];
const $next = document.querySelectorAll(".btns")[1];
const $disk = document.querySelector('.disk');


// 이미지asset 넣기
for (let i = 0; i < musicListData.length; i++) {
  const $song = document.createElement("li");
  $song.innerHTML = `
  <img src=${musicListData[i].src} />
  `;
  $song.addEventListener("click", selectImg);
  $album.append($song);
}

//===========================================================================================================
// 함수들


// 이미지에 css효과 붙이기 + 이미지 클릭이벤트로도 이동가능 + disk inner색상과 bg색상도 변경(bgUpdate()함수사용)
function selectImg(event) {
  for (el of songs) {
    if (event.target.parentElement === el) {
      el.classList.add("play");
      currentIndex = [...songs].findIndex((item) => item == this);
      selected = true;
      bgUpdate();
    } else el.classList.remove("play");
  }

  // for in으로 했을때는 왜 remove에 에러가 났을까?
  // for (el in songs) {
  //   console.log(songs);
  //   if (event.target.parentElement === songs[el]) {
  //     console.log(event.target.parentElement);
  //     songs[el].classList.add("play");
  //     currentIndex = [...songs].findIndex((item) => item == this);
  //     console.log(currentIndex);
  //     selected = true;
  //     bgUpdate();
  //   } else {
  //     songs[el].classList.remove("play"); 
  //     console.log("123456")
  //   };  
  // }
}


// 배경 바꾸기
function bgUpdate() {
  $diskInner.setAttribute(
    "style",
    `background-color: ${musicListData[currentIndex].color[0]}`
  );
  $main.setAttribute(
    "style",
    `background: linear-gradient(120deg, ${musicListData[currentIndex].color[0]}, ${musicListData[currentIndex].color[1]})`
  );

  // Play시 배경이 앨범 이미지로 바뀌는건 구현 못함.. 어디에 접근해야할까?
  if( selected === true && playStatus === true) {
    $main.style.backgroundImage = `url('${musicListData[currentIndex].src}')`;
  }
}


// 좌우 버튼 눌렸을 때 이동하기
$prev.addEventListener("click", prevPlay);
$next.addEventListener("click", nextPlay);

function prevPlay() {
  if (currentIndex <= 0) {
    currentIndex = 0;
  } else currentIndex--;
  bgUpdate();
  for (let i = 0; i < musicListData.length; i++) {
    songs[i].classList.remove("play");
  }

  selectedMusic();
}

function nextPlay() {
  if (currentIndex >= musicListData.length - 1) {
    currentIndex = 0;
  } else currentIndex++;
  bgUpdate();
  for (let i = 0; i < musicListData.length; i++) {
    songs[i].classList.remove("play");
  }

  selectedMusic();
}

// 선택된 음악표시
function selectedMusic() {
  selected = true;
  songs[currentIndex].classList.add("play");
  bgUpdate();
}

// 음악 재생, 음악 멈추기
$playBtn.addEventListener('click', playMusic);
$stopBtn.addEventListener('click', stopMusic);

function playMusic() {
  playStatus = true;
  if(selected == true){
  $disk.classList.add('active');
  $main.children[0].src = musicListData[currentIndex].src;
  }
  bgUpdate();
}

function stopMusic() {
  playStatus = false;
  $main.children[0].src = ""
  $disk.classList.remove('active');
  bgUpdate();
}



/* 요소정리
  1. .list_btn_group > ul
      - li태그의 자식요소로 이미지를 갖고
      - 해당 ul의 자식으로서 추가
  
  2. .list_btn_group > button:first-child
     .list_btn_group > button:last-child
      ps. let currentPlayIndex = 0;
  
  3. diskInner
      선택된 노래가 바뀔때마다 디스크 내부원 변경
  
  4. main
      선택된 노래가 바뀔 때마다 배경화면이 바뀐다
      선택된 노래가 실행되면 앨범 이미지로 바뀐다
      ps. let playstatus = 0(false);
  
  5. .disk에 active 추가(애니메이션)
  
  6. .play_btn_group > button:first-child
     .play_btn_group > button:last-child
  
     *플레이 버튼이 눌러졌을 때 배경화면이 그라데이션에서 앨범 이미지로 변경 및 디스크 회전
     *중지 버튼이 눌러지면 디스크회전 중지 배경화면 그라데이션으로
  
  7. 생성된 ul의 li의 이미지 태그를 가지고 올 것
  
     *현재 선택된 노래의 focus 
     *흰색테두리 + 크기 커짐
  
  8. 이미지 눌렀을 때도 이동 가능(재생 중일 때 클릭되면 재생 노래도 변경)
  */
