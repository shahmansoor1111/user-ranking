document.addEventListener("DOMContentLoaded", function() {
    const searchbtn = document.getElementById("search-btn");
    const userInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyprogressCircle = document.querySelector(".easy-progress"); 
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
                easyprogressCircle.innerHTML = "Easy<br><br>35%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 51%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 14%"
                found = true;
                break; 
            }
             if (userInput.value.toLowerCase() === arr[1].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>30%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 20%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 50%"
                found = true;
                break; 
            }
              if (userInput.value.toLowerCase() === arr[2].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>19%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 71%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 20%"
                found = true;
                break; 
            }
              if (userInput.value.toLowerCase() === arr[3].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>30%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 25%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 60%"
                found = true;
                break; 
            }
              if (userInput.value.toLowerCase() === arr[4].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>20%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 40%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 40%"
                found = true;
                break; 
            }
        }
        

        if (!found) {
            easyprogressCircle.innerHTML = "Not Found ❌";
            mediumprogressCircle.innerHTML = "Not Found ❌";
            hardprogressCircle.innerHTML = "Not Found ❌";
        }
        
        
        
    });
});
