// --- Part 1: Variables & Conditionals ---
// Goal: Demonstrate understanding of variables and conditionals.

const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', () => {
  // Get the value from the input and convert it to a number.
  const userAge = parseInt(ageInput.value);

  // Use a conditional (if/else) to make a decision.
  if (userAge >= 18) {
    ageResult.textContent = "You are an adult. You can vote!";
    ageResult.style.color = 'green';
  } else {
    ageResult.textContent = "You are a minor. You cannot vote yet.";
    ageResult.style.color = 'red';
  }
});

// --- Part 2: Functions ---
// Goal: Build reusable blocks of logic.

const priceInput = document.getElementById('priceInput');
const calculatePriceBtn = document.getElementById('calculatePriceBtn');
const totalPriceResult = document.getElementById('totalPriceResult');

// Custom function to calculate a total with tax.
function calculateTotal(price, taxRate) {
  return price * (1 + taxRate);
}

calculatePriceBtn.addEventListener('click', () => {
  const itemPrice = parseFloat(priceInput.value);
  const tax = 0.08; // 8% tax rate
  const total = calculateTotal(itemPrice, tax);
  totalPriceResult.textContent = `The total price is: $${total.toFixed(2)}`;
});

const toggleMessageBtn = document.getElementById('toggleMessageBtn');
const toggleMessage = document.getElementById('toggleMessage');

// Custom function to toggle the visibility of an element.
function toggleVisibility(element) {
  element.classList.toggle('hidden');
}

toggleMessageBtn.addEventListener('click', () => {
  toggleVisibility(toggleMessage);
});

// --- Part 3: Loops ---
// Goal: Practice controlling flow with repetition.

const dynamicList = document.getElementById('dynamicList');
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

// Example 1: `for` loop to add list items.
for (let i = 0; i < items.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = items[i];
  dynamicList.appendChild(listItem);
}

const listItems = document.querySelectorAll('#dynamicList li');

// Example 2: `forEach` loop to add a click event listener to each list item.
listItems.forEach(item => {
  item.addEventListener('click', () => {
    console.log(`You clicked on: ${item.textContent}`);
    item.classList.toggle('highlight');
  });
});

// --- Part 4: DOM Interaction ---
// Goal: Make a static HTML page interactive.

const domText = document.getElementById('domText');
const changeTextBtn = document.getElementById('changeTextBtn');

let isOriginalText = true;

// DOM Interaction 1: Listen for a click event on the button.
changeTextBtn.addEventListener('click', () => {
  // DOM Interaction 2: Change the text content of an element.
  if (isOriginalText) {
    domText.textContent = "The text has been changed by JavaScript!";
  } else {
    domText.textContent = "Click the button below to change this text.";
  }
  isOriginalText = !isOriginalText;

  // DOM Interaction 3: Change the style of the element.
  domText.classList.toggle('highlight');
});