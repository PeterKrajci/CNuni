function multipleOfIndex(array) {
  let index = 0
  newArray = array.filter( (x, index) => {
    if(x % index == 0){
      return true;
    }
    else
      return false;
  })
  return newArray;
}
