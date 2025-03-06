document.addEventListener("DOMContentLoaded", () => {
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
});
