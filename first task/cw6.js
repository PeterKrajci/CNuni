function abbrevName(name){
  const array = name.split(" ");
  const initials = array[0][0] + '.' + array[1][0]
  return initials;
}

function abbrevName(name){
  const array = name.split(" ");
  const [firstName, secondName] = [...array]
  if(firstName.length>0 && secondName.length>0){ 
    
    return `${firstName[0]}.${secondName[0]}`;
  }
  else{
    return "";
  }
}
