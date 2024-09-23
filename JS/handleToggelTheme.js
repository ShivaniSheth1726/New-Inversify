const rootEl = document.querySelector("html");
const imgEl = document.querySelector("span img");

function handleToggleTheme() {
  rootEl.classList.toggle("dark-theme");
  if (rootEl.classList.contains("dark-theme")) {
    imgEl.src = "https://img.icons8.com/fluency/50/partly-cloudy-day.png";
  } else {
    imgEl.src = "https://img.icons8.com/fluency/50/partly-cloudy-night.png";
  }
}

export default handleToggleTheme;
