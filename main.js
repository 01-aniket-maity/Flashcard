
// flashcard code starts

const flashcardsData = [
  {
    word: 'Serendipity',
    meaning:
      'The occurrence and development of events by chance in a happy or beneficial way',
  },
  { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
  { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear' },
  {
    word: 'Quixotic',
    meaning: 'Extremely idealistic; unrealistic and impractical',
  },
  {
    word: 'Pernicious',
    meaning: 'Having a harmful effect, especially in a gradual or subtle way',
  },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
  {
    word: 'Resilience',
    meaning: 'The capacity to recover quickly from difficulties; toughness',
  },
  {
    word: 'Ineffable',
    meaning: 'Too great or extreme to be expressed or described in words',
  },
  {
    word: 'Sycophant',
    meaning:
      'A person who acts obsequiously toward someone important in order to gain advantage',
  },
];

const cardContainer = document.getElementById('card-container');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const doneButton = document.getElementById('done-button');
const scoreElement = document.getElementById('score-card');

let point = 0;
let clickedItems = [];

const handleStart = () => {
  flashcardsData.forEach((item) => {
    //* Card add section
    const cardElement = document.createElement('div');
    cardElement.className = 'border-2 border-green-500 rounded-md p-5 h-full ';
    cardElement.innerText = item.word;
    cardContainer.appendChild(cardElement);

    //* Card click event
    cardElement.addEventListener('click', () => {

      cardElement.classList.add('border-red-500');
      cardElement.innerHTML = `<strong>${item.word}:</strong> ${item.meaning}`;
      if (clickedItems.indexOf(item) == -1) {
        clickedItems.push(item);
        point++;

        scoreElement.textContent = `Selected: ${point}`;
      }
    })
  });

  resetButton.classList.remove('hidden');
  doneButton.classList.remove('hidden');
  startButton.classList.add('hidden');
};

const handleReset = () => {

  // reset button event

  cardContainer.innerHTML = '';
  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');

  point = 0;

  scoreElement.textContent = `Selected: ${point}`;
  clickedItems = [];
};

const handleDone = () => {

  // done button event

  cardContainer.innerHTML = '';
  clickedItems.forEach((item) => {
    const clickedElement = document.createElement('div');
    clickedElement.innerHTML = `<strong>${item.word}:</strong> ${item.meaning}`;
    clickedElement.className = 'border-2 border-red-500 rounded-md p-5 h-full '
    cardContainer.appendChild(clickedElement);
  });


  doneButton.classList.add('hidden');
  resetButton.classList.remove('hidden');
  startButton.classList.add('hidden');
  scoreElement.textContent = `Selected: ${point}`;
};



// flashcard code ends
