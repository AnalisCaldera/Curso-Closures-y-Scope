function moneyBox(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins +=coins;
        console.log( `MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}
    
const myMoneyBox = moneyBox();
myMoneyBox(5); //ahorra 5
myMoneyBox(5); //ahorra 10
myMoneyBox(15) //ahorra 25