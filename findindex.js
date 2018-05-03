function findIndex(str,ch,n)
{
    var len = str.length;
    var count=0;
    for(var i=0;i<len;i++)
    {
        if(str[i] === ch){
            count++;
            if(count === n)
        {
            return i;
        }
        }
        
    }
}