// iç içe fonsiyon döndürme

function Counter(value){
    let x = value;
    function increment(){
        x++;
        return x
    }
    function decrement(){
        x++;
        return x
    }
    function reset(){
        x = value
        return x
    }
    return {
        increment:increment,
        decrement,decrement,
        reset:reset
    }
}
const count = Counter(6);
console.log(count.increment())
console.log(count.increment())
console.log(count.decrement())
console.log(count.reset())

