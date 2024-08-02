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