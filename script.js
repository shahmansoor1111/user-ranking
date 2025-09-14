document.addEventListener("DOMContentLoaded", function() {
    const searchbtn = document.getElementById("search-btn");
    const userInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyprogressCircle = document.querySelector(".easy-progress");   // class
    const mediumprogressCircle = document.querySelector(".medium-progress");
    const hardprogressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardstatsContainer = document.querySelector(".stats-card");

    searchbtn.addEventListener("click", function() {
        let arr = ["shahmansoor","faraz", "abdulwahab","tatheer", "umama"];
        let found = false;

        for (let i = 0; i < arr.length; i++) {
            if (userInput.value.toLowerCase() === arr[0].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>50%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 30%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 20%"
                found = true;
                break; // exit loop once found
            }
             if (userInput.value.toLowerCase() === arr[1].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>60%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 20%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 20%"
                found = true;
                break; // exit loop once found
            }
              if (userInput.value.toLowerCase() === arr[2].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>10%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 70%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 20%"
                found = true;
                break; // exit loop once found
            }
              if (userInput.value.toLowerCase() === arr[3].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>30%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 30%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 40%"
                found = true;
                break; // exit loop once found
            }
              if (userInput.value.toLowerCase() === arr[4].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>20%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 40%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 40%"
                found = true;
                break; // exit loop once found
            }
        }
        

        if (!found) {
            easyprogressCircle.innerHTML = "Not found ❌";
            mediumprogressCircle.innerHTML = "Not found ❌";
            hardprogressCircle.innerHTML = "Not found ❌";
        }
        
        
        
    });
});
