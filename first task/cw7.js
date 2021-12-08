function check(a,x){
  return a.some(item => x === item);
};

function check(a,x){
  return a.some(item => {
    if (typeof item === 'string' || typeof x === 'string'){
      x = x.toLowerCase();
      item = item.toLowerCase();
    }
    
    return x === item;
    
  });
};
