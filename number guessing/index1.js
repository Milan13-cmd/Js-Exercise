const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempt = 0;
let guess;
let running = true;

while(running) {
  guess = window.prompt(`gusses number between ${minNum} - ${maxNum}`);
  guess = Number(guess);


  if(isNaN(guess)) {
     window.alert("invalid number");
  }
   else if(guess < minNum || guess > maxNum) {
   window.alert("Please enter a vaild number");
    }

  else {
     attempt++;
    if(guess < answer) {
     window.alert("too low. try again");
    }
    else if(guess > answer) {
      window.prompt("too high. try again");
    } 
    else {
      window.alert(`Congulation the answer is ${guess}. and it took u ${attempt} ateempts`);
     running = false;
    }

  }

}
