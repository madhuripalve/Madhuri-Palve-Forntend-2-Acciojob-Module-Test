document.getElementById("img-2").disabled = true;
document.getElementById("img-3").disabled = true;
document.getElementById("img-4").disabled = true;
let msg = document.getElementById('msgDispaly');
let formInfoArray = []
let attempt = 2;
let RemainingDiceClick = 3;
let totalScore = 0;
// Image 1
function openFormFunction() {
    document.getElementById('form').classList.remove('hidden');
}
function submitFormInfoFunction() {
    let name = document.getElementById('name').value;
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    
    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if (name && userName && email) {
        let obj = {
            Name: name,
            UserName: userName,
            Email: email,
        }

        formInfoArray.push(obj);
        document.getElementById("img-2").disabled = false;
        document.getElementById("img-1").disabled = true;
        msg.innerText = 'Submitted successfully!!! Click on the next Image'
        document.getElementById('form').classList.add('hidden');
    } else {
        alert(`fill the valid data`)
    }
}
// image 2
function displayFormInfoFunction() {
    msg.classList.add('hidden');
    document.getElementById('info').innerText = `Name: ${formInfoArray[0].Name}, User Name: ${formInfoArray[0].UserName}, Email: ${formInfoArray[0].Email}`
    document.getElementById('displayInfo').classList.remove('hidden');
    document.getElementById("img-3").disabled = false;
    document.getElementById("img-2").disabled = true;
}
// image 3
function displayDiceWthScore() {
    RemainingDiceClick = 3;
    totalScore = 0;
    document.getElementById('diceClicks').innerText = RemainingDiceClick;
    document.getElementById('score').innerText = totalScore;
    document.getElementById('displayInfo').classList.add('hidden');
    attempt--;
    console.log(`attempt remaining= ${attempt}`);
    document.getElementById('attemptsLeft').innerText = attempt;
    document.getElementById('diceWthScore').classList.remove('hidden');
    document.getElementById("img-3").disabled = true;
}

function diceClick() {
    RemainingDiceClick--;
    document.getElementById('diceClicks').innerText = RemainingDiceClick;
    let randomNo = Math.floor(Math.random() * 6) + 1;
    totalScore += randomNo;
    document.getElementById('score').innerText = totalScore;
    if (RemainingDiceClick === 0) {
        document.getElementById("dice-Image").disabled = true;
        document.getElementById('score').innerText = totalScore;
        if (totalScore > 10) {
            msg.classList.remove('hidden');
            msg.innerHTML = `Congratulation!!! Your total score is ${totalScore} which is greater than 10. Click on next Image to valid coupon code.`
            document.getElementById('diceWthScore').classList.add('hidden');
            document.getElementById("img-4").disabled = false;
        } else {
            if (attempt != 0) {
                alert(`Oh!!! Your total score is ${totalScore} which is less than 10. Try once again!! Click on 3rd image.`);
                document.getElementById("img-3").disabled = false;
                RemainingDiceClick = 3;
                totalScore = 0;
                document.getElementById("dice-Image").disabled = false;
                document.getElementById('diceWthScore').classList.add('hidden');
                console.log(`RemainingDiceClick = ${RemainingDiceClick}`);
                console.log(`totalScore = ${totalScore}`);

            } else {
                document.getElementById('score').innerText = totalScore;
                msg.classList.remove('hidden');
                msg.innerHTML = `Ooops Bad luck!!! Your total score is ${totalScore}less than 10 & You have give all your attempts. Please Try Again`
                document.getElementById('diceWthScore').classList.add('hidden');
                document.getElementById('tryAgainImage').classList.remove('hidden');
            }
        }
    }
}
// Image 4 
function generateCouponCodeFunction() {
    document.getElementById("img-4").disabled = true;
    let coupon = '';
    for (let i = 0; i < 12; i++) {
        coupon += Math.floor(Math.random() * 10);
    }
    document.getElementById('congratsImage').classList.remove('hidden');
    msg.classList.remove('hidden');
    msg.innerHTML = `Congratulations!!! You have successfully generated a coupon.Code is ${coupon}`
}