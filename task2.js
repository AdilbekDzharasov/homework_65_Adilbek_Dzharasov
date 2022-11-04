const FirstList = [1, 5, 12, 4, 3];
const SecondList = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const ThirdList = [3, 10, 17];

function count(array) {
    let sum = 0;
    array.forEach(function(item){
        sum += item
    })
    return console.log(sum / array.length);
}
count(FirstList);
count(SecondList);
count(ThirdList);

