let answers = [
  'No way!',
  'Possibly',
  'Absolutely',
  'Try again later',
  'Duh',
  'Yes',
  'No',
  'Signs point to yes'
  ]
let displayAnswer = function()
  {
    let index = Math.floor(Math.random() * answers.length);
    let answer = answers[index];
    let element = document.getElementById( 'circle' );
    element.style.display = 'inline-block';
    element.innerHTML = '<br><br>' + answer;
  }
