// clouserfunction

function outerFunction(){
    let counter =0;
    function innerFunction(){
        counter++;
        console.log(counter);
    }
    return innerFunction;
    
}
const myClsure =outerFunction();
myClsure();
myClsure();
myClsure();