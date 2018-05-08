function addition(...a)
{
  if(a.length)
    return a.reduce((accumulator,currentValue) => accumulator+currentValue);
  else 
    return 0;
}



//-----------------------------------------------------------------------------------

let addition = (...a) => a.length ? a.reduce((accumulator,currentValue) => accumulator+currentValue) : 0;
