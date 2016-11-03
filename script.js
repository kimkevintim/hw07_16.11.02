function random(max){
    return Math.floor(Math.random()* max+1);
}

function max(a, b){
    if(a > b){return a;}
    else{return b;}
}

function lastChar(arr){
    return arr.substring(arr.length - 1);
}

function squares(a, b){
    return (a*a + b*b);
}

function leapYear(y){
    if(y%4===0 && y%100!=0 || y%400===0){
        return "yes";
    }
    else{return "no";}
}


//function random_r(min, max){
//    return Math.floor(Math.random()* (max-min)+1+min;
//}


