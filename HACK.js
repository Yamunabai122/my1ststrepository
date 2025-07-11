const testText = document.getElementById("text-display").innerText;
const inputArea = document.getElementById("input-area");
const result = document.getElementById("result");

let startTime, endTime;

inputArea.addEventListener("focus", () => {
  if (!startTime) {
    startTime = new Date();
  }
});

inputArea.addEventListener("input", () => {
  const typedText = inputArea.value;
  if (typedText === testText) {
    endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    const wordCount = testText.trim().split(/\s+/).length;
    const speed = Math.round((wordCount / timeTaken) * 60);
    result.textContent = `🎉 You typed at ${speed} words per minute!`;
    inputArea.disabled = true;
  }
});

function startTest() {
  inputArea.value = "";
  inputArea.disabled = false;
  result.textContent = "";
  startTime = null;
}

