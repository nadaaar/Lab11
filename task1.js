function sum(a,b){

    return a+b;
}

function subtraction(a,b){

    return a-b;
}

function multiply(a,b){

    return a*b;
}

function division(a,b){
    if (b==0){
        return "Not possible";
    }
    else{
    return a/b;
    }
}


module.exports.sum=sum;
module.exports.subtraction=subtraction;
module.exports.multiply=multiply;
module.exports.division=division;
