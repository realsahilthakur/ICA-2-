function updateTime() {
  const element = document.getElementById("datetime");
  if (element) {
    element.innerHTML = new Date().toLocaleString();
  }
}

// Export without immediate execution
module.exports = { updateTime };

// Initialize only in browser environment
if (typeof jest === 'undefined') {
  updateTime();
  setInterval(updateTime, 1000);
}