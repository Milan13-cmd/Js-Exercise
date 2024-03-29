// Number Guessing Game 

const minNum =1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
  
    if(isNaN(guess)){
        window.alert("please enter a vaild no");
    }

    else if(guess < minNum || guess > maxNum){
        window.alert("please enter a vaild no");
    }

    else{
        attempts++;
        if(guess < answer){
            window.alert("Too Low! Try agin");
        }
        else if(guess > answer){
            window.alert("Too High! Try agin");
        }
        else{
            window.alert(`correct  The answer was ${guess}. It took you ${attempts} attemps.`)
            running = false;
       
        }


    }
    

}