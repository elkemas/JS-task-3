        function yugo(number){
            let digArr=[];
            for (i=1; i<=number; i++){
                if(i%2===0 && i%3===0 && i%5===0){
                digArr.push('yu-gi-oh');
            }
            else if(i%15===0){
                digArr.push('gi-oh');
            }
            else if(i%10===0){
                digArr.push('yu-oh');
            }
            else if(i%6===0){
                digArr.push('yu-gi');
            }
            else if(i%5===0){
                digArr.push('oh');
            }
            else if(i%3===0){
                digArr.push('gi');
            }
            else if(i%2===0){
                digArr.push('yu');
            }
            else{
                digArr.push(i);
            }
        }
    console.log(digArr);
    return digArr;
}
        yugo(100);
        yugo(59);