let tabs = document.querySelectorAll(".tabs button");
let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

function w3_open() {
  document.getElementById("mySidebar").style.display = "flex";
  document.getElementById("mySidebar").style.flexDirection = "column";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}