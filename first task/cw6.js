function abbrevName(name){
  const array = name.split(" ");
  const initials = array[0][0] + '.' + array[1][0]
  return initials;
}
