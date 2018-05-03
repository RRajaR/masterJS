
function replcevowel(str){
    var len = str.length;
str = str.replace(/a/g,"4");
str = str.replace(/e/g,"3");
str = str.replace(/i/g,"1");
str = str.replace(/o/g,"0");
str = str.replace(/u/g,"_");
return str;
}

