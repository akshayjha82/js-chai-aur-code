# All Projects

## Project link
[Click here to acsses projects](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code 


## Project 1-Color Changer
``` Javascript
let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (event) => {
    // console.log(event);
    // console.log(event.target);
    switch (event.target.id) {
      case 'grey':
        body.style.backgroundColor = event.target.id;
        break;
      case 'white':
        body.style.backgroundColor = event.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = event.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});

```

## Project 2-BMI Calculator

``` Javascript
const form = document.querySelector('form');
// don't select height and weight outside the eventlistener as it will hold empty value every time

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    const conditions = document.querySelector('.conditions');
    if (bmi < 18.6) {
      conditions.innerHTML = 'You are Under weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      conditions.innerHTML = 'You are in normal range';
    } else if (bmi > 24.9) {
      conditions.innerHTML = 'You are Over weight';
    }
  }
});
```

## Project 3 - Digital CLOCK

```Javascript
const clock = document.getElementById('clock')

setInterval(function() {
  let date=new Date()
  clock.innerHTML=`${date.toLocaleTimeString()}`
},1000)
```