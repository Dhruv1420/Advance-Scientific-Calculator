var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");
var start = true;

Array.prototype.forEach.call(buttons, function(button){
    button.addEventListener("click", function(){
        if(!start){
            display.value = "";
            start = true;
        }

        if(button.textContent != "=" &&
        button.textContent != "C" &&
        button.textContent != "⌫" &&
        button.textContent != "%" &&
        button.textContent != "x!" &&
        button.textContent != "x^" &&
        button.textContent != "ln" &&
        button.textContent != "e" &&
        button.textContent != "x²" &&
        button.textContent != "log" &&
        button.textContent != "cos" &&
        button.textContent != "√" &&
        button.textContent != "sin" &&
        button.textContent != "tan" &&
        button.textContent != "±" &&
        button.textContent != "π" &&
        button.textContent != "∘" &&
        button.textContent != "rad"){
            display.value += button.textContent;
        }else if(button.textContent === "="){
            equal();
        }else if(button.textContent === "C"){
            clear();
        }else if(button.textContent === "⌫"){
            backSpace();
        }else if(button.textContent === "%"){
            percentage();
        }else if(button.textContent === "x!"){
            factorial();
        }else if(button.textContent === "x^"){
            exponent();
        }else if(button.textContent === "ln"){
            ln();
        }else if(button.textContent === "e"){
            exp();
        }else if(button.textContent === "x²"){
            square();
        }else if(button.textContent === "log"){
            log();
        }else if(button.textContent === "cos"){
            cos();
        }else if(button.textContent === "√"){
            squareRoot();
        }else if(button.textContent === "sin"){
            sin();
        }else if(button.textContent === "tan"){
            tan();
        }else if(button.textContent === "±"){
            plusMinus();
        }else if(button.textContent === "π"){
            pi();
        }else if(button.textContent === "∘"){
            degree();
        }else if(button.textContent === "rad"){
            rad();
        }
    });
});

function checkLength(){
    if(display.value.length >= 25){
        display.value = "Overload Error";
    }
}

function syntaxError(){
    if(eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError){
        display.value = "Syntax Error";
    }
}

function equal(){
    if((display.value).indexOf("^") > -1){
        for(var i=0;i<display.value.length;i++){
            if(display.value[i] === "^"){
                var ex = (display.value).slice(0, i);
                ex += "**";
                ex += (display.value).slice(i+1);
                display.value = ex;
            }
        }
    }
        syntaxError();
        checkLength();
        display.value = eval(display.value);
        start = false;
}

function clear(){
    display.value = "0";
    start = false;
}

function backSpace(){
    display.value = display.value.substring(0, display.value.length - 1);
}

function percentage(){
    display.value = display.value/100;
}

function factorial(){
    if(display.value === 0){
        display.value = 1;
    }else if(display.value < 0){
        display.value = "Undefined";
    }else{
        var number = 1;
        for(var i=display.value; i>0; i--){
            number *= i;
        }
        display.value = number;
    }
}

function exponent(){
    display.value += "^";
}

function ln(){
    display.value = Math.log(display.value);
}

function exp(){
    display.value = Math.exp(display.value);
}

function square(){
    display.value = eval(display.value*display.value);
}

function log(){
    display.value = Math.log10(display.value);
}

function cos(){
    display.value = Math.cos(display.value);
}

function squareRoot(){
    display.value = Math.sqrt(display.value);
}

function sin(){
    display.value = Math.sin(display.value);
}

function tan(){
    display.value = Math.tan(display.value);
}

function plusMinus(){
    if(display.value.charAt(0) === "-"){
        display.value = display.value.slice(1);
    }else{
        display.value = "-" + display.value;
    }
}

function pi(){
    display.value = (display.value*Math.PI);
}

function degree(){
    display.value = display.value*(180/Math.PI);
}

function rad(){
    if(display.value/180 === 1){
        display.value = "π";
    }else{ 
        display.value = (display.value/180) + "π";
    }
}