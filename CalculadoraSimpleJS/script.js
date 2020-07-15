
$(document).ready(function(){
    var operacion= new Array(4); //[0]=num1,[1]=operador,[2]=num2,[3]=operador(hacer cálculo).
    var num="";
    var i=0;
    $(".number").hover(onHoverN, onLeaveN);
    $(".number").click(function(){
        document.getElementById("display").value=num+this.value;
        num = document.getElementById("display").value;
    });
    $(".operator").hover(onHoverO, onLeaveO);
    $(".operator").click(function(){
        if(num !=""){
            if(i == 1){ i=0;}
            operacion[i]=num;
            num="";
            i++;
        }
        if(i!=0 && !isNaN(operacion[i-1])){ 
            operacion[i]=this.value;//operador
            if(i>2){//Hay dos números para operar
                var res;
                if(operacion[1] ==="+"){
                    res=parseInt(operacion[0])+parseInt(operacion[2]);
                }else if(operacion[1] ==="-"){
                    res=parseInt(operacion[0])-parseInt(operacion[2]);
                }else if(operacion[1] ==="*"){
                    res=parseInt(operacion[0])*parseInt(operacion[2]);
                }else if(operacion[1] ==="/"){  
                    if(operacion[2] != "0"){
                        res=parseInt(operacion[0])/parseInt(operacion[2]);
                    } else{
                        res="error";
                    }
                }else if(operacion[1] ==="="){
                    res=operacion[2];
                }
                
                document.getElementById("display").value=res;
                if(res !== "error" ){
                    operacion[0]=res;
                    if(operacion[i] ==="="){//Solo se deja el resultado para seguir trabajando con él.
                        i=1;
                    }else{
                        operacion[1]=operacion[i];
                        i=2;
                    }
                }else if(res === "error"){
                    i=0;
                }
                
            }else{
                i++;
            }
        }else{//Si se pulsa más de un operador se sustituye
            operacion[i-1]=this.value;
        }

    });
    $(".deleteAll").hover(onHoverD, onLeaveD);
    $(".deleteAll").click(function(){
        num="";
        i=0;
        document.getElementById("display").value="0";
    });
});

function onHoverN() {
    $(this).removeClass('number');
    $(this).addClass('numberfocus');
}
function onLeaveN() {
    $(this).removeClass('numberfocus');
    $(this).addClass('number');
}
function onHoverO() {
    $(this).removeClass('operator');
    $(this).addClass('operatorfocus');
}
function onLeaveO() {
    $(this).removeClass('operatorfocus');
    $(this).addClass('operator');
}
function onHoverD() {
    $(this).removeClass('deleteAll');
    $(this).addClass('deleteAllfocus');
}
function onLeaveD() {
    $(this).removeClass('deleteAllfocus');
    $(this).addClass('deleteAll');
}

