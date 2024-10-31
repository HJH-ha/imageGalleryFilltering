// alert("test");
// 고양이 강아지 새 순서 , 자연 자동차 사람들 순서

const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// 3개의 필터버튼에 클릭이벤트 발생시 함수 filterCards 실행
filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

// 필터 선택에 따라서 맞는 카드만 보여주거나 숨기기
function filterCards(e) {
  // console.log(e.target); 테스트용
  // 먼저 필터버튼의 active 클래스를 제거한후 클릭한 버튼에 active 클래스 넣기
  document.querySelector("#filter-buttons .active").classList.remove("active");
  e.target.classList.add("active");

  // 필터와 이름이 같거나 모두 선택이면 show 클래스로 바꾸기
  filterableCards.forEach((card) => {
    // html에서 자바스크립트로 가져오려면 dataset , data로 시작하는속성
    if (
      card.dataset.name === e.target.dataset.filter ||
      e.target.dataset.filter === "all"
    ) {
      return card.classList.replace("hide", "show");
    }
    // 그외 카드들은 hide로 숨기기
    card.classList.add("hide");
  });
}
