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
        let arr = ["shahmansoor","faraz", "abdulwahab","tatheer", "moiz"];
        let found = false;

        for (let i = 0; i < arr.length; i++) {
            if (userInput.value.toLowerCase() === arr[0].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>35%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 51%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 14%"
                 easyprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,35%), #283a2e 0%)";
                  mediumprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,51%), #283a2e 0%)";
                   hardprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,14%), #283a2e 0%)";
                found = true;
                break; 
            }
             if (userInput.value.toLowerCase() === arr[1].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>30%";
            

                 mediumprogressCircle.innerHTML = "Medium <br> <br> 20%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 50%"
                 easyprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,30%), #283a2e 0%)";
                  mediumprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,20%), #283a2e 0%)";
                   hardprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,50%), #283a2e 0%)";
                found = true;
                break; 
            }
              if (userInput.value.toLowerCase() === arr[2].toLowerCase()) {
                
                easyprogressCircle.innerHTML = "Easy<br><br>19%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 71%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 20%"
                 easyprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,19%), #283a2e 0%)";
                  mediumprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,71%), #283a2e 0%)";
                   hardprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,20%), #283a2e 0%)";
                found = true;
                break; 
            }
              if (userInput.value.toLowerCase() === arr[3].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>30%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 25%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 45%"
                found = true;
                easyprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,30%), #283a2e 0%)";
                  mediumprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,25%), #283a2e 0%)";
                   hardprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,45%), #283a2e 0%)";
                break; 
            }
              if (userInput.value.toLowerCase() === arr[4].toLowerCase()) {
                easyprogressCircle.innerHTML = "Easy<br><br>20%";
                 mediumprogressCircle.innerHTML = "Medium <br> <br> 30%";
                 hardprogressCircle.innerHTML = "Hard <br><br> 50%"
                 easyprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,20%), #283a2e 0%)";
                  mediumprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,40%), #283a2e 0%)";
                   hardprogressCircle.style.background = "conic-gradient(#299f5d var(--progress-degree,40%), #283a2e 0%)";
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
