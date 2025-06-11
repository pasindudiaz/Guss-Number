let randomnumber = Math.floor(Math.random() * 10) + 1;
let attempts = 4;   // not vanish
console.log(randomnumber);

function clickAction() {
    let inputnumber = Number(document.getElementById("inputnumber").value);


    if (attempts <= 0) {
        document.getElementById("resultMsg").innerText = `Oops.. Game Over ! The number was ` + randomnumber;
        return;
    } else if (inputnumber === randomnumber) {
        document.getElementById("resultMsg").innerText = ` Congratulations ! You guessed it `;
        return;
    } else {
        
        if (inputnumber < randomnumber) {
            document.getElementById("resultMsg").innerText = `Too small — `+attempts+ ` chance(s) left`;
        } else {
            document.getElementById("resultMsg").innerText = `Too big — ` + attempts + ` chance(s) left`;
        }
        attempts--;
    }
}
function resetGame() {
    attempts = 4;
    document.getElementById("resultMsg").innerText = "Good Luck Buddy";
    randomnumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomnumber);
}


