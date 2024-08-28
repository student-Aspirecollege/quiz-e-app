let questionEl =  document.querySelector('.para');
let inputEl =  document.querySelector('.answer');
let score = 0;
let btn = document.querySelector('.button');
let scoreEl = document.querySelector('.score-headding');
let answer;

const generateNum = (min , max) => {
    return Math.floor(Math.random() *(max - min + 1) + min );
}


const newNum = () => {
    let randomNum1 = generateNum(1,10);
    let randomNum2 = generateNum(1,10);
    questionEl.innerHTML = `Q: Question is ${randomNum1} multiply by ${randomNum2} ?`
     answer = randomNum1 * randomNum2;

}
newNum();
const compairVal = () => {
     const userAnswer = parseFloat(inputEl.value.trim());
     if(isNaN(userAnswer)){
        alert('Enter the number');
        return;
    } 
     if(answer === userAnswer){
        score += 1;
    }else{
        score -= 1;
    }
    scoreEl.innerHTML = `Score = ${score}`;
    newNum();
}
btn.addEventListener('click', compairVal);





