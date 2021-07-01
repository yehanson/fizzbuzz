let fb= 0;
let fizz= 0;
let buzz= 0;

window.onload = function (){
    for(i= 1; i<=100; i++){
        fb++;
        fizz++;
        buzz++;
    
        if(fb== 15){
            console.log('fizz buzz');
            fb= 0;
            fizz= 0;
            buzz= 0;
        }else if(fizz== 3){
            console.log('fizz');
            fizz= 0;
        }else if(buzz== 5){
            console.log('buzz');
            buzz= 0;
        }else{
            console.log(i);
        };
    };
};