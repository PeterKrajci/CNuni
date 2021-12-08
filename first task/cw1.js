function wordsToMarks(str){
  sum = 0
  for (let i = 0; i < str.length; i++) {
    sum=sum+str.charCodeAt(i) - 96;
    console.log(sum);

    }
  return sum;
}

function wordsToMarks(str){
  const arr = [...str];
  console.log(arr);
  
  const sum = arr.reduce((acc, curr) => {
    return acc + curr.charCodeAt() - 96;
    
    }, 0)
  
  return sum;
}
