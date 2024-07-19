let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerHTML;
    switch (value) {
      case '=':
        try {
          expression = eval(expression);
        } catch (error) {
          expression = 'Error';
        }
        break;
      case 'DEL':
        expression = expression.substring(0,expression.length-1);
        break;
      case 'AC':
        expression = '';
        break;
      default:
        expression += value;
    }
    input.value = expression;
  });
});
