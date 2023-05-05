function FizzBuzz(){
        for(i=1;i<=20;i++){
            if(i%3 == 0 && i%5 == 0){
                document.write('FizzBuzz</br>'.bold().fontsize(4));
            }else if(i%3 == 0){
                document.write('Fizz</br>'.bold().fontsize(4));
            }else if(i%5 == 0){
                document.write('Buzz</br>'.bold().fontsize(4));
            }else{
                document.write(i+'</br>');
            }
        }
}

