function palindrome(s){
    var re = /[^A-Za-z0-9]/g;
var len = s.length;
s = s.toLowerCase().replace(re,'');
for(var i=0;i<len/2;i++){
    if(s[i] !== s[s.length-1-i])
    {
return false;
    }  
}
return true;
}


