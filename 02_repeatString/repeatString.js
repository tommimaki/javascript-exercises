const repeatString = function (string, num) {
  str = "";
  let numero = num;
    if(num < 0){
        return 'ERROR'
    } else{
  for (i = 1; i <= num; i++) {
    str += string;
  } 
  return str;
}
};

// Do not edit below this line
module.exports = repeatString;
