

function summation(number,x,y){
   sum=0
    for(i=0;i<number;i++){
       if(i%x==0){
        sum=sum+i;
       } 
       if(i%y==0){
        sum=sum+i;
       }

    }
    return sum;
}
module.exports.summation=summation;