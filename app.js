function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num===""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getformattedNumber(num);
    }
  
}

function getformattedNumber(num){
    var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function ReverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator=document.getElementsByClassName("operator");
console.log(operator);
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        if(this.id==="backspace"){
            var output=ReverseNumberFormat(getOutput()).toString();
            //convert the output to string and using substring to remove the last character
			if(output){
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
        }
    });
}

var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
         var output=ReverseNumberFormat(getOutput());
         if(output!==NaN){
             output=output+this.id;
             printOutput(output);
         }
    });
}

