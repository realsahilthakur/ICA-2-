function updateTime() {
  const element = document.getElementById("datetime");
  if (element) {
    element.innerHTML = new Date().toLocaleString();
  }
}

// Only run in browser environment, not during tests
if (typeof jest === 'undefined') {
  updateTime();
  setInterval(updateTime, 1000);
}

module.exports = { updateTime };
