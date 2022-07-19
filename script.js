import { articles } from "./articles.mjs";

const switchBtn = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle-btn");
const articlesContainer = document.querySelector(".articles-container");

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format("MMMM Do, YYYY");
    return `<article class="post">
          <h2 class='accr-btn'>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p class='dropdown'>
            ${snippet}
          </p>
        </article>`;
  })
  .join("");

articlesContainer.innerHTML = articlesData;

//dark-light mode
toggleBtn.addEventListener("click", function () {
  switchBtn.classList.toggle("switch");

  if (switchBtn.classList.contains("switch")) {
    switchBtn.innerHTML = "<i class='bx bx-moon'></i>";
  } else {
    switchBtn.innerHTML = " <i class='bx bx-sun'    ></i>";
  }

  document.documentElement.classList.toggle("dark-theme");
});

// accordion

const accrBtn = articlesContainer.querySelectorAll(".accr-btn");

if (accrBtn) {
  accrBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      this.classList.toggle("expand");
    });
  });
}
