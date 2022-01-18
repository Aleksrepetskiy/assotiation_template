//TABS
const tabContents = document.querySelectorAll(".index-news__tab-content"),
tabsList = document.querySelector(".index-news__tabs"),
tabs = tabsList.querySelectorAll(".index-news__tab");

function hideTabContents() {
tabContents.forEach((item) => {
	//item.style.display = "none"
	item.classList.add("hide");
	item.classList.remove("show", "fade");
});
tabs.forEach((item) => {
	item.classList.remove("active");
});
}
function showTabContent(position = 0) {
// tabContents[position].style.display = "block";
tabContents[position].classList.add("show", "fade");
tabContents[position].classList.remove("hide");
tabs[position].classList.add("active");
}
tabsList.addEventListener("click", function (e) {
const target = e.target;
if (target.classList.contains("index-news__tab")) {
	tabs.forEach((item, num) => {
		if (item == target) {
			hideTabContents();
			showTabContent(num);
		}
	});
}
});