let a =  prompt("enter a number")

let arr = ["pe","la","is"]
// let found = false

for(let i = 0; i < arr.length;i++) {
    if(arr[i] === a) {
        alert("yes");
        found = true
        break;
    }
}
    if(!found){
        alert("no")
    }
   
