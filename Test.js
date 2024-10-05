//1]
function sum1(n1) {
        let t = 0;
        console.log("Table :");
        for (let i = 1; i <=10; i++) {
            t += n1; 
            console.log(t); 
        }
        
    }
    sum1(12);

    //3]
    function check(n2) {
        if (n2 > 0) {
            console.log(n2+ "  Given Number Is Positive");
        }
        else{
            console.log(n2+"  Given Number Is Negetive");
            
        }
}
check(-12);

//2]
function celsios(c1) {
    let f1 = (c1 * 9/5)+32;
    console.log("Celsius to Faherenheit Converter :");
    
    console.log(f1);
}
celsios(2);