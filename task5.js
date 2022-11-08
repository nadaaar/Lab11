
function find(number){
    const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    if(array.includes(number)){
        return true;
    }
    else{
        return false;
    }
   
}

module.exports.find=find;