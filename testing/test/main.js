module.exports.isOddNumber = (number) => {
    return number % 2 == 1
}

module.exports.countEvenNumber = (numberList) => {
    if(!Array.isArray(numberList)){
        return 0;
    }
    return numberList.filter(function(x){
        return x % 2 == 0;    
    }).length;
}

module.exports.isPrimeNumber = (number) => {
    if(number < 2){
        return false;
    }
    for(var i=2;i<=Math.sqrt(number);i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}