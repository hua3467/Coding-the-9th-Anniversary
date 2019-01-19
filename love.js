console.log();
for(var i = 0; i < 2; i++ ){
    console.log(zz("Z"));
}
console.log(zz3("Z"));
console.log(zz4("Z",";"));
console.log(zz5("Z",";"));
console.log(zz6("Z",";") + "\n" + zz6("Z",";"));
console.log(zz8("Z",";"));
console.log(zz9("Z",";"));
console.log(zz10("Z",";"));
console.log(zz11_19("Z",";"));

console.log(zz("Z"));
console.log("\n\n");


function zz(char){
    var str = "";
    for(var i = 0; i < 52; i++){
        str += char;
    }
    return str;
}

function zz3(char){
    var str = "";
    for( var i= 0; i < 51; i++ ){
        
        if( ( i>13 && i <20 )||( i>33 && i < 40 ) ){
            str += " ";
        } else {
            str += char;
        }
        if( i==33 ){
            str += "M";
        }
    }
    return str;
}

function zz4(char, fill){
    var str = "";
    for(var i = 0; i < 52; i++ ){
        
        if( i==10 || i ==11 || i == 22 || i == 23 || i == 30 || i == 31 || i == 43 || i == 44){
            str += " ";
        } else if( i == 29 || i == 42 ){
            str += "M";
        }else if ((i > 11 && i < 22) || (i > 32 && i < 43)){
            str += fill;
        }else{
                str += char;
        }
    }
    return str;
}

function zz5(char, fill){
    var str = "";
    for(var i = 0; i < 52; i++ ){
        
        if( i==8 || i ==9 || i == 28 || i == 29 || i == 44 || i == 45){
            str += " ";
        } else if( i == 27 || i == 43 ){
            str += "M";
        }else if ((i > 9 && i < 26) || (i > 29 && i < 44)){
            str += fill;
        }else{
                str += char;
        }
    }
    return str;
}

function zz6(char, fill){
    var str = "";
    for(var i = 0; i < 52; i++ ){
        
        if( i==7 || i ==8 || i == 26 || i == 27 || i == 45 || i == 46){
            str += " ";
        } else if( i == 25 || i == 44 ){
            str += "M";
        }else if ((i > 8 && i < 26) || (i > 27 && i < 44)){
            str += fill;
        }else{
                str += char;
        }
    }
    return str;
}

function zz8(char, fill){
    var str = "";
    for(var i = 0; i < 52; i++ ){
        
        if( i==8 || i ==9 || i == 27 || i == 28 || i == 44 || i == 45){
            str += " ";
        } else if( i == 26 || i == 43 ){
            str += "M";
        }else if ((i > 9 && i < 26) || (i > 28 && i < 44)){
            str += fill;
        }else{
                str += char;
        }
    }
    return str;
}

function zz9(char, fill){
    var str = "";
    for(var i = 0; i < 52; i++ ){
        
        if( i==10 || i ==11 || i == 30 || i == 31 || i == 43 || i == 44){
            str += " ";
        } else if( i == 29 || i == 42 ){
            str += "M";
        }else if ((i > 11 && i < 29) || (i > 31 && i < 43)){
            str += fill;
        }else{
                str += char;
        }
    }
    return str;
}

function zz10(char, fill){
    var str = "";
    for(var i = 0; i < 52; i++ ){
        
        if( i==12 || i ==13 || i == 33 || i == 34 || i == 41 || i == 42){
            str += " ";
        } else if( i == 32 || i == 40){
            str += "M";
        }else if ((i > 12 && i < 32) || (i > 34 && i < 40)){
            str += fill;
        }else{
                str += char;
        }
    }
    return str;
}

function zz11_19(char, fill){

    var str = "";
    var l1 = 14;
    var l2 = 15;
    var l3 = 39;
    var l4 = 40;
    var line = 11;

    for( var j = 0; j < 6; j++ ){
        
        for(var i = 0; i < 52; i++ ){
                
            if( i==l1 || i ==l2 || i == l3 || i == l4){
                str += " ";
            } else if( i == (l3-1)){
                str += "M";                
            }else if (i > l2 && i < l3){
                str += fill;
            }else{
                   str += char;
            }
        }
        str += "\n";
        line ++;
    
        
        l1 += 2;
        l2 += 2;
        l3 -= 2;
        l4 -= 2;
    }

        if( l3 >= 27 ){
            for( var j = 0; j < 3; j++ ){
                for(var i = 0; i < 52; i++ ){
                        
                    if( i==l3 || i == (l3+1) ){
                        str += " ";
                    } else if( i == (l3-1)){
                        str += "M";                
                    }else{
                           str += char;
                    }
                }
                str += "\n";
                line ++;
                l3 -= 1;
            }
        }

        if( l3 < 25 ){
                for(var i = 0; i < 52; i++ ){
                    if( i==l3 || i == (l3+1) || i == (l3+2) || i == (l3+3)   ){
                        str += " ";
                    } else if( i == (l3-1)){
                        str += "M";                
                    }else{
                           str += char;
                    }
                }
                str += "\n";
                line ++;
            }
        if( line >= 20 ){
            str += "ZZZZZZZZZZ @===========================@ ZZZZZZZZZZZ\n"
            + "ZZZZZZZZZZZ||    ZHUODAN & ZHENHUA    ||ZZZZZZZZZZZZ\n"
            + "ZZZZZZZZZZZ||     9TH ANNIVERSARY     ||ZZZZZZZZZZZZ\n"
            + "ZZZZZZZZZZZ|| 2009/12/24 - 2018/12/24 ||ZZZZZZZZZZZZ\n"
            + "ZZZZZZZZZZZ||     [  FARGO, USA ]     ||ZZZZZZZZZZZZ\n"
            + "ZZZZZZZZZZ @===========================@ ZZZZZZZZZZZ";
        }
    return str;
}
