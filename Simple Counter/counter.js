//initial count is set to zero
let count = 0;

//querySelectors
const btnsIncrease = document.querySelector(".btn-increase");
const btnsReset = document.querySelector(".btn-reset");
const btnsDecrease = document.querySelector(".btn-decrease");

//Functions

        btnsIncrease.addEventListener('click', function (e) {
            const styles = e.currentTarget.classList;
            if (styles.contains("btn-increase")) {
                count++;
                console.log('increased')
                value.innerText = count;
                counterColor();
            }
    });

        btnsDecrease.addEventListener('click', function (e) {
            const styles = e.currentTarget.classList;
            if (styles.contains("btn-decrease")) {
                count--;
                console.log('decreased')
                value.innerText = count;
                counterColor();
            }
    });

        btnsReset.addEventListener('click', function (e) {
            const styles = e.currentTarget.classList;
            if (styles.contains("btn-reset")) {
                count = 0;
                console.log('reset')
                value.innerText = count;
                counterColor();
            }
    });

    function counterColor(){
    if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }
    }