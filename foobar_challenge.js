console.log("Let's play foobar")

let userNumber = prompt('enter how many digits in the pattern you want to see')
parseInt(userNumber)
let list = [];

for (let index=1; index<=userNumber; index++) {
    if ( index % 5 === 0 && index % 3 ===0) {
        list.push("foobar")
    }else if (index % 5 === 0){
        list.push("bar")
    }else if (index % 3 === 0){
        list.push("foo")
    }else {
        list.push(index);
    }
}


alert(list);