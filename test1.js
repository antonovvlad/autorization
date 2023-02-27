const form = document.querySelector('#myForm');

 const getValue = (selector) => document.querySelector(selector);

 const isValidAge = (ageValue) => {
  if (ageValue === '') {
    return false, window.alert(RESULT_FALSE_AGE_MUST_BE_A_NUM);
  }
  const age = Number(ageValue);
  if (isNaN(age)) {
    return false, window.alert(RESULT_FALSE_AGE_MUST_BE_A_NUM);
  }
  if (age < 18 || age >= 80) {
    return false, window.alert(RESULT_FALSE_WRONG_AGE);
  }
  return true;
}

const isValidName = (nameValue) => {
  if (nameValue === '' || nameValue === null) {
    return false, window.alert(RESULT_FALSE_NAME_MUST_BE_A_STR);
  }
  return true;
}

const nameInput = getValue('#name');
const ageInput = getValue('#age');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameValue = nameInput.value;
  const ageValue = ageInput.value;

  if (isValidAge(ageValue) && isValidName(nameValue)) {
    window.location.href = YOTUBE_REDIRECT;
  } else {
    alert(GENERAL_MISTAKE)
  }
 
  nameInput.value = nameValue;
  ageInput.value = ageValue;
});
