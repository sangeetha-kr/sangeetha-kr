// JavaScript for typewriter effect

const words = ["Flutter Developer", "Java Developer","Software Developer", "Freelancer", "Open Source Contributor"];
let currentWordIndex = 0;
let currentLetterIndex = 0;
let currentWord = words[currentWordIndex];
let typingElement = document.getElementById("typewriter");

function type() {
  if (currentLetterIndex < currentWord.length) {
    typingElement.textContent += currentWord.charAt(currentLetterIndex); // Add one character at a time
    currentLetterIndex++;
    setTimeout(type, 150); // Slow down the typing effect by adding a timeout
  } else {
    setTimeout(deleteText, 500); // Wait before deleting the current word
  }
}

function deleteText() {
  if (currentLetterIndex > 0) {
    typingElement.textContent = typingElement.textContent.slice(0, -1); // Remove one character at a time
    currentLetterIndex--;
    setTimeout(deleteText, 50); // Slow down the deletion effect by adding a timeout
  } else {
    currentWordIndex = (currentWordIndex + 1) % words.length;  // Move to the next word in the array
    currentWord = words[currentWordIndex];
    setTimeout(type, 500);  // Wait before typing the next word
  }
}

// Start typing the first word
setTimeout(type, 500);
