// Question 1

function findWords(){
    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
    let dog_names = ["Max","HAS","PuRple","dog"]
    for (i = 0; i< dog_names.length;i++){
        for(j = 0; j<dog_string.length;j++){
            if(i == j){
                console.log("Matched name")
            } else{
                console.log('No matches')
            }
        }
    }
}
findWords()
// Question 2
function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1,'even index')
        }
        console.log(arr)
    }
}
replaceEvens(['Max','Baseball','Reboot','Goku','Trucks','Rodger'])