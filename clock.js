const timeArea = document.querySelector(".time-area");

function getTime() {
  //   console.log("!");
  let now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();

  timeArea.innerHTML = `
    <span class="time-area__date">
      ${year}년 ${month + 1}월 ${day}일
    </span>
    <span class="time-area__time">
      ${hour}시 ${minute}분 ${second}초
    </span>
  `;
}

setInterval(getTime, 1000);
