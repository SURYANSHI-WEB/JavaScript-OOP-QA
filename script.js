// Making a class for each Q/A pair
class QAItem {
  constructor(q, a) {

    // Saving the question and answer text into the object
    this.questionText = q;
    this.answerText = a;
    this.showing = false; // By default, the answer is not showing
  }

  // This function runs when a question is clicked to show/hide the answer
  clickAction(answerBox, icon) {
    // Toggle the "showing" variable
    this.showing = !this.showing;
    
    if (this.showing == true) {
      // Show the answer and change icon to minus
      answerBox.classList.add('show-answer');
      icon.textContent = '-';
    } else {
      // Hide the answer and change icon to plus
      answerBox.classList.remove('show-answer');
      icon.textContent = '+';
    }
  }

  // This function creates the HTML elements and puts them on the page
  makeHtml(mainBox) {
    
    // Create the outer div for the whole Q&A item
    const itemDiv = document.createElement('div');
    itemDiv.className = 'qa-item';

    // Create the header (the clickable question part)
    const topPart = document.createElement('div');
    topPart.className = 'qa-header';
    topPart.innerHTML = `
        <span>${this.questionText}</span>
        <span class="symbol">+</span> `;
    
    // Create the hidden answer box
    const bottomPart = document.createElement('div');
    bottomPart.className = 'qa-answer';
    bottomPart.textContent = this.answerText;

    // Find the plus/minus symbol inside the header
    const symbol = topPart.querySelector('.symbol');

    // Add a click event to the header part
    topPart.addEventListener('click', () => {
        this.clickAction(bottomPart, symbol);
    });

    // Append the parts together
    itemDiv.appendChild(topPart);
    itemDiv.appendChild(bottomPart);
    
    // Add the finished item to the main container on the webpage
    mainBox.appendChild(itemDiv);
  }
}

// Creating an array of 7 questions using my QAItem Class
const myQuestions = [
    new QAItem("What is the difference between let and const?", "Let is for variables that can change, const is for variables that stay the same."),
    new QAItem("What does the DOM stand for?", "It stands for Document Object Model, which is how JS sees the HTML."),
    new QAItem("What is an array?", "An array is a special variable that can hold more than one value at a time."),
    new QAItem("What is a Class in JS?", "A class is a blueprint for creating objects with similar properties and methods."),
    new QAItem("What is CSS Flexbox?", "It is a layout model that helps align items easily in a row or column."),
    new QAItem("What is a function?", "A function is a block of code designed to perform a particular task."),
    new QAItem("What is localStorage used for?", "It allows you to save data in the web browser even after you refresh.")
];

// This function runs when the window finishes loading
window.onload = function() {
  const displayArea = document.getElementById('qa-container');
  
  // Loop through the list of questions and run the makeHtml function for each
  for (let i = 0; i < myQuestions.length; i++) {
      myQuestions[i].makeHtml(displayArea);
  }

  // Logic for the Search bar bonus feature
  document.getElementById('searchBar').addEventListener('input', function(e) {
    const userInput = e.target.value.toLowerCase();
    const allCards = document.querySelectorAll('.qa-item');
      
    // Loop through all cards and hide ones that don't match the search
    for (let i = 0; i < allCards.length; i++) {
      const currentQuestion = allCards[i].querySelector('.qa-header').textContent.toLowerCase();
      allCards[i].style.display = currentQuestion.includes(userInput) ? "block" : "none";
    }
  });
  // Button logic to "Expand All"
  document.getElementById('openAll').addEventListener('click', function() {
    const allAnswers = document.querySelectorAll('.qa-answer');
    const allSymbols = document.querySelectorAll('.symbol');
    
    for (let i = 0; i < allAnswers.length; i++) {
      allAnswers[i].classList.add('show-answer');
      allSymbols[i].textContent = '-';
    }

  // Update the 'showing' property for all objects in my list
  myQuestions.forEach(q => q.showing = true);
  });

  // Button logic to "Collapse All"
  document.getElementById('closeAll').addEventListener('click', function() {
    const allAnswers = document.querySelectorAll('.qa-answer');
    const allSymbols = document.querySelectorAll('.symbol');
    
    for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].classList.remove('show-answer');
        allSymbols[i].textContent = '+';
    }
    // Update the 'showing' property for all objects in my list
    myQuestions.forEach(q => q.showing = false);
  });
};