var arr = new Array(26);
var arr_r = new Array(51);
var str = "";

var arr_3 = ["ZZZZZZZZZZZZZ      ZZZZZZZZZZZZZM      ZZZZZZZZZZZZ"];

for(var i = 0; i < arr_r.length; i++ ){
    arr_r[i] = "Z";
}

for(var i = 0; i < arr.length; i++ ){
    arr[i] = arr_r;
}


for( var i = 0; i < arr.length; i++ ){
    for( var j = 0; j < arr[i].length; j++ ){
        str += arr[i][j];
    }
    str += "\n";
}


console.log(str);