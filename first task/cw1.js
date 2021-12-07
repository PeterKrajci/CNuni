function wordsToMarks(str){
  sum = 0
  for (let i = 0; i < str.length; i++) {
    sum=sum+str.charCodeAt(i) - 96;
    console.log(sum);

    }
  return sum;
}
