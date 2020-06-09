// Question 1

function findWords(){
    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
    let dog_names = ["Max","HAS","PuRple","dog"]
    dog_string.split(" ")
    for (i = 0; i< dog_string.length;i++){
        if(dog_names.includes(dog_string[i])){
            console.log('Matched name')
        } else{
            console.log('No matches')
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