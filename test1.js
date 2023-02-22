const form = document.querySelector('#myForm');

function getValue(selector) {
  return document.querySelector(selector);
}

function isValidAge(ageValue) {
  if (ageValue === '') {
    return false;
  }
  const age = Number(ageValue);
  if (isNaN(age)) {
    return false;
  }
  if (age < 18 || age >= 80) {
    return false;
  }
  return true;
}

function isValidName(nameValue) {
  if (nameValue === '' || nameValue === null) {
    return false;
  }
  return true;
}

const nameInput = getValue('#name');
const ageInput = getValue('#age');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameValue = nameInput.value;
  const ageValue = ageInput.value;

  if (isValidAge(ageValue) && isValidName(nameValue)) {
    window.location.href = 'https://www.youtube.com/';
  } else {
    alert("you have a mitakes in your form")
  }
 
  nameInput.value = nameValue;
  ageInput.value = ageValue;
});
