document.addEventListener("DOMContentLoaded", () => {
  // 탭 기능
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 모든 버튼과 탭 내용 비활성화
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      // 클릭한 버튼과 해당 탭 활성화
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // 슬라이드 기능
  const slides = document.querySelector(".slides");
  const slideImages = slides.querySelectorAll("img");
  const totalSlides = slideImages.length;
  let currentIndex = 0;

  // 슬라이드 위치 업데이트
  function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`; // 100vw 단위로 이동
  }

  // 다음 슬라이드로 이동
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  }

  // 이전 슬라이드로 이동
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  }

  // 자동 슬라이드 (3초 간격)
  let autoSlide = setInterval(nextSlide, 3000);

  // 화살표 버튼 이벤트
  document.querySelector(".next").addEventListener("click", () => {
    clearInterval(autoSlide);
    nextSlide();
    autoSlide = setInterval(nextSlide, 3000);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    clearInterval(autoSlide);
    prevSlide();
    autoSlide = setInterval(nextSlide, 3000);
  });

  // 초기 슬라이드 설정
  updateSlide();
});
