//Random Number Generator with Delay and Progress Indication:
const delayTime = 3000;

function randomNumberGenerator() {
    setTimeout (function() {
        const randomNumGeneartor = Math.floor(Math.random()*100);
        console.log(`Generated Number: ${randomNumGeneartor}`);
    }, delayTime)
}

function displayProgress() {
    let remaningTime = delayTime/1000;
    let interval = setInterval(function(){
        console.log(`Waiting ${remaningTime} seconds...`);
        remaningTime--;
        if(remaningTime < 1 ){
            clearInterval(interval);
        }
    }, 900)
}

randomNumberGenerator();
displayProgress();