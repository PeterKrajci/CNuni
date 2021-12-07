function abbrevName(name){
  array = name.split(" ");
  initials = array[0][0] + '.' + array[1][0]
  return initials;
}
