
const clientTheme = window.matchMedia("(prefers-color-scheme: dark)");

const html = document.getElementById("html");

if (clientTheme.matches) {
  html.className = "dark"
}