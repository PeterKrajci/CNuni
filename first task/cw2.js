var humanYearsCatYearsDogYears = function(humanYears) {
  
  var residualYears = humanYears - 1;
  var catYears = 15;
  var dogYears = 15;
  
  if(humanYears >= 2){
      catYears = 24;
      dogYears = 24;
      residualYears=residualYears-1;

    }
  dogYears = dogYears + 5 * residualYears
  catYears = catYears + 4 * residualYears
  
  return [humanYears, catYears, dogYears];
}
