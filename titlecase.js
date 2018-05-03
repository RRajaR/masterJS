function titlecase(s)
{
    s=s.toLowerCase().split(' '); 
    for(var i=0;i<s.length;i++)
    {
       
       s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
    }
return s.join(' ');
}


